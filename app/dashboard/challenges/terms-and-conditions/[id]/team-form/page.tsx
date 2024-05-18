"use client";

import React, { useState } from "react";
import { Input, Button } from "@/components/molecules/FormComponents";
import ChallengeService from "@/services/challengeService";
import { useAppDispatch } from "@/common/hooks";
import { joinAChallenge } from "@/redux/features/challengeSlice";
import toast from "react-hot-toast";
import { useParams, useRouter, useSearchParams } from "next/navigation";

interface FormData {
  name: string;
  talents: string[];
  projectName: string;
  projectDescription: string;
  shareLink: string;
  challengeId: string;
}

const TeamForm = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = String(params.id);

  const initialFormData: FormData = {
    name: "",
    talents: [],
    projectName: "",
    projectDescription: "",
    shareLink: "",
    challengeId: id,
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [teamMate, setTeamMate] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  const joinThisChallenge = async (data: any) => {
    setSubmitting(true);
    try {
      const response = await ChallengeService.joinAChallenge(data);
      if (response) {
        dispatch(joinAChallenge(response.data));
        setSubmitting(false);
        toast.success("You have successfully joined this challenge!");
      }
      return response;
    } catch (err: any) {
      toast.error(err.response.data.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (label: any, data: any) => {
    setFormData((prevData) => {
      const newData = {
        ...prevData,
        [label]: data,
      };

      console.log("Form Data", newData);
      return newData;
    });
  };

  const handleInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamMate(event.target.value);
  };

  const handleInterestKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && teamMate.trim() !== "") {
      event.preventDefault();
      if (formData.talents.length < 5) {
        addInterest(teamMate.trim());
      }
    }
  };

  const addInterest = (interest: string) => {
    if (!formData.talents.includes(interest) && formData.talents.length < 5) {
      setFormData((prevData) => ({
        ...prevData,
        talents: [...prevData.talents, interest],
      }));
      setTeamMate("");
    }
  };

  const removeInterest = (interest: string) => {
    setFormData((prevData) => ({
      ...prevData,
      talents: prevData.talents.filter((i) => i !== interest),
    }));
  };

  const Submit = async (e: any) => {
    e.preventDefault();

    const formDataToSend: FormData = {
      name: formData.name,
      talents: formData.talents,
      projectName: formData.projectName,
      projectDescription: formData.projectDescription,
      shareLink: formData.shareLink,
      challengeId: formData.challengeId,
    };

    setSubmitting(true);

    try {
      await joinThisChallenge(formDataToSend);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full container lg:px-10 p-10 px-0">
      <div className="lg:w-[476px] m-auto">
        <h3 className="font-semibold text-2xl lg:text-3xl leading-10 lg:leading-[43.56px] text-[#535458] py-10 text-center">
          Tech Ignite Hackathon 2024
        </h3>

        <div className="w-full center flex-col gap-6">
          <div className="w-full">
            <Input
              onChange={(e: any) => handleChange("name", e.target.value)}
              label="Team Name"
              type="text"
              value={formData.name}
              placeholder="Avengers Team"
            />
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-2 relative">
              <label className="font-medium text-base text-[#817E7E]">
                Add your teammates
              </label>
              <div className="flex flex-wrap py-1 bg-foundation items-center outline-none border-2 border-lightGray focus:outline-none rounded">
                <div className="flex flex-wrap flex-grow w-full gap-2 pl-2">
                  {formData.talents.map((team, index) => (
                    <span
                      key={index}
                      className="flex-initial rounded-lg"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "3px 8px",
                        border: "1px solid #ccc",
                        marginRight: "2px",
                        marginBottom: "2px",
                      }}
                    >
                      {team}
                      <button
                        onClick={() => removeInterest(team)}
                        style={{ marginLeft: "10px" }}
                        className="text-[18px] text-red-500"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                {formData.talents.length < 5 && (
                  <input
                    type="text"
                    value={teamMate}
                    onChange={handleInterestChange}
                    onKeyDown={handleInterestKeyDown}
                    placeholder="Search for a team mate"
                    className="focus:outline-none min-w-[150px] flex-grow py-2 px-4 bg-foundation"
                  />
                )}
              </div>

              {teamMate && formData.talents.length < 5 && (
                <div
                  className="border-2 border-lightGray -mt-2 cursor-pointer p-2 text-gray-700 rounded-b hover:bg-lightBlue-100 w-full bg-white"
                  onClick={() => addInterest(teamMate.trim())}
                >
                  {teamMate}
                </div>
              )}
            </div>
          </div>

          <div className="w-full">
            <Input
              onChange={(e: any) => handleChange("projectName", e.target.value)}
              label="Project Name"
              type="text"
              value={formData.projectName}
              placeholder="XYZ Solution"
            />
          </div>

          <div className="w-full">
            <Input
              onChange={(e: any) =>
                handleChange("projectDescription", e.target.value)
              }
              label="Project Description"
              type="text"
              value={formData.projectDescription}
              placeholder="Give a brief intro of your project"
            />
          </div>

          <div className="w-full">
            <Input
              onChange={(e: any) => handleChange("shareLink", e.target.value)}
              label="Share a link to a Google Docs file to describe your idea"
              type="text"
              value={formData.shareLink}
              placeholder="Give a detailed explanation of your project in the docs"
            />
          </div>

          <div className="w-full">
            <Button link={Submit} validation={submitting} classname="w-full">
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamForm;
