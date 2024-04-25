"use client";

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/buttons/Button";
import InputBox from "@/components/Inputs/InputBox";
import LabelText from "@/components/Labels/Labeltext";
import { CalendarForm } from "@/components/UI/datepicker";
import Tiptap from "@/components/tipTap/Tiptap";

const ChallengeForm = () => {
  const router = useRouter();

  const [tipTapContent, setTipTapContent] = useState<string>("");

  // store in localstorage
  const [challengeName, setChallengeName] = useState<string>("");
  const [challengeDescription, setChallengeDescription] = useState<string>("");

  const [value, setValue] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    challengeName: "",
    challengeDescription: "",
    Add: "",
    start: "",
    end: "",
    rules: "",
  });

  const changeTiptapContent = (reason: any) => {
    setTipTapContent(reason);
  };

  const validateForm = () => {
    // Check if all required fields are filled out
    const { challengeName, challengeDescription, Add, start, end } = formData;
    if (
      challengeName.trim() !== "" &&
      challengeDescription.trim() !== "" &&
      Add.trim() !== "" &&
      start.trim() !== "" &&
      end.trim() !== ""
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  // code to handle drag and drop event goes here
  const fileUpload = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const files = event.dataTransfer.files;
    // Process the dropped files
    console.log(files);
  };

  const handleNext = () => {
    router.push("/dashboard/challenges/ongoing");

    localStorage.setItem("challengeName", challengeName);
    localStorage.setItem("challengeDescription", challengeDescription);
  };

  const handlePrev = () => {
    router.push("/challenges");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // Use the name to determine which state variable to update
    if (name === "challengeName") {
      setChallengeName(value);
    } else if (name === "challengeDescription") {
      setChallengeDescription(value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // this is the tip tap content, you can add it to your form data
    console.log(tipTapContent);

    console.log("Form data:", formData);

    setFormData({
      challengeName: "",
      challengeDescription: "",
      Add: "",
      start: "",
      end: "",
      rules: tipTapContent,
    });
  };

  return (
    <div className="w-full container py-5 ">
      <div className="lg:w-[476px] m-auto">
        {/* <h3 className=" font-semibold text-[33px] leadding-[43.56px] text-[#535458] py-10 text-center"> */}
        <h3 className="font-semibold text-2xl lg:text-3xl leading-10 lg:leading-[43.56px] text-[#535458] py-10 text-center">
          Create a Challenge
        </h3>

        <div
          className="space-y-6  flex-col items-center justify-center"
          // action="#"
        >
          <div>
            <LabelText htmlFor="username">Challenge Name</LabelText>
            <InputBox
              type="text"
              id="challengeName"
              name="challengeName"
              placeholder="Enter challenge name"
              value={challengeName}
              handleChange={handleChange}
            />
          </div>

          <div>
            <LabelText htmlFor="challengeDescription">
              Challenge Description
            </LabelText>
            <InputBox
              type="text"
              id="challengeDescription"
              name="challengeDescription"
              placeholder="Tech Ignite 2024 Hackathon is designed to be a new ..."
              value={formData.challengeDescription}

              handleChange={handleChange}
            />
          </div>

          <div>
            <LabelText htmlFor="Add">Add a Friend</LabelText>
            <InputBox
              type="text"
              id="Add"
              name="Add"
              placeholder=""
              value={formData.Add}
              handleChange={handleChange}
            />
          </div>

          <div className="flex items-center ">
            <input type="checkbox" name="" id="" />
            <label htmlFor="rules" className="px-3 text-[#88898C]">
              Prizes
            </label>
          </div>

          <div className="flex flex-col ">
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="rules" className="px-3 text-[#88898C] ">
                Rules
              </label>
            </div>

            <Tiptap
              value={tipTapContent}
              onChange={(newContent: string) => changeTiptapContent(newContent)}
            />
          </div>

          <div>
            <LabelText htmlFor="start">Start Date</LabelText>
            <CalendarForm />
          </div>

          <div>
            <LabelText htmlFor="end">End date</LabelText>
            <CalendarForm />
          </div>

          <div>
            <LabelText htmlFor="Add">Cover Photo</LabelText>
            <InputBox
              type="text"
              id="Add"
              name="Add"
              placeholder="Add a cover photo or banner for your challenge here"
              value={formData.Add}
              handleChange={handleChange}
            />
          </div>

          <Button

            className="w-full flex items-center justify-center text-white "
            onClick={handleNext}

          >
            Create a challenge
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeForm;
