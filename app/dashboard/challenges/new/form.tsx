"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, FileUpload, Input, Select } from "@/components/FormComponents";
import ChallengeService from "@/services/challengeService";
import toast from "react-hot-toast";
import Tiptap from "@/components/tipTap/Tiptap";

interface FormData {
  name: string;
  description: string;
  participationType: string;
  startTime: string;
  endTime: string;
  rules: string;
  coverPhoto: File | null;
}

const ChallengeForm = () => {
  const router = useRouter();

  const [tipTapContent, setTipTapContent] = useState<string>("");
  const initialFormData: FormData = {
    name: "",
    description: "",
    participationType: "",
    startTime: "",
    endTime: "",
    coverPhoto: null,
    rules: tipTapContent,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const changeTiptapContent = (reason: string) => {
    setTipTapContent(reason);
  };

  const handleChange = (label: keyof FormData, data: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [label]: data,
    }));
  };

  const handleFileChange = (file: File) => {
    setFormData((prevData) => ({
      ...prevData,
      coverPhoto: file,
    }));
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("participationType", formData.participationType);
    data.append("startTime", formData.startTime);
    data.append("endTime", formData.endTime);
    data.append("rules", formData.rules);
    if (formData.coverPhoto) {
      data.append("coverPhoto", formData.coverPhoto);
    } else {
      toast.error("No file selected");
      return;
    }

    try {
      setSubmitting(true);
      await ChallengeService.createAChallenge(data);
      setSubmitting(false);
      toast.success("You have successfully created a challenge");
    } catch (error) {
      setSubmitting(false);
      toast.error("Error creating challenge");
      console.error("Error creating challenge", error);
    }
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      rules: tipTapContent,
    }));
  }, [tipTapContent]);

  return (
    <div className="w-full container lg:px-10 p-10 px-0">
      <div className="m-auto container">
        <h3 className="font-semibold text-2xl lg:text-3xl leading-10 lg:leading-[43.56px] text-[#535458] lg:py-10 py-4 text-center">
          Create a Challenge
        </h3>

        <div className="space-y-6 flex-col items-center justify-center">
          <div className="w-full flex gap-4 flex-col lg:flex-row">
            <div className="w-full">
              <Input
                onChange={(e) => handleChange("name", e.target.value)}
                label="Challenge Name"
                type="text"
                value={formData.name}
                placeholder="Tech Ignite 2024 Hackathon"
              />
            </div>
            <div className="w-full">
              <Select
                onChange={(e: any) =>
                  handleChange("participationType", e.target.value)
                }
                label="Participation Type "
                options={[
                  { label: "Individual", value: "individual" },
                  { label: "Team", value: "Team" },
                ]}
                value={formData.participationType}
                placeholder="Select Participation Type"
              />
            </div>
          </div>

          <div className="w-full">
            <Input
              onChange={(e) => handleChange("description", e.target.value)}
              label="Challenge Description"
              type="textbox"
              value={formData.description}
              placeholder="Tech Ignite 2024 Hackathon"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-base text-[#817E7E]">
              Challenge Details
            </label>
            <Tiptap
              value={tipTapContent}
              onChange={(newContent: string) => changeTiptapContent(newContent)}
            />
          </div>

          <div className="w-full flex gap-4 flex-col lg:flex-row">
            <div className="w-full">
              <Input
                onChange={(e) => handleChange("startTime", e.target.value)}
                label="Start Date"
                type="date"
                value={formData.startTime}
              />
            </div>

            <div className="w-full">
              <Input
                onChange={(e) => handleChange("endTime", e.target.value)}
                label="End Date"
                type="date"
                value={formData.endTime}
              />
            </div>
          </div>

          <div className="flex-col items-center justify-center h-full gap-3 w-full">
            <FileUpload
              image={
                formData.coverPhoto
                  ? URL.createObjectURL(formData.coverPhoto)
                  : ""
              }
              handleFileChange={(file: any) => handleFileChange(file)}
            />
            <div className="flex items-center gap-1">
              <img src="/info.png" alt="info" />
              <p className="text-gray text-sm">
                Make sure your photo is not blurry
              </p>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <Button
              link={handleSubmit}
              classname="lg:w-[40%] w-full flex items-center justify-center text-white"
            >
              {submitting ? "Creating..." : "Create a Challenge"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeForm;
