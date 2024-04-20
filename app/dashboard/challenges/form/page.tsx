"use client";

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/buttons/Button";
import InputBox from "@/components/Inputs/InputBox";
import LabelText from "@/components/Labels/Labeltext";
import { CalendarForm } from "@/components/UI/datepicker";
import { boolean } from "zod";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const ChallengeForm = () => {
  const [formData, setFormData] = useState({
    challengeName: "",
    challengeDescription: "",
    Add: "",
    start: "",
    end: "",
  });
  const [value, setValue] = useState("");

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

  const router = useRouter();

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
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setFormData({
      challengeName: "",
      challengeDescription: "",
      Add: "",
      start: "",
      end: "",
    });
  };

  return (
    <div className="w-full container py-5 ">
      <div className="lg:w-[476px] m-auto">
        {/* <h3 className=" font-semibold text-[33px] leadding-[43.56px] text-[#535458] py-10 text-center"> */}
        <h3 className="font-semibold text-2xl lg:text-3xl leading-10 lg:leading-[43.56px] text-[#535458] py-10 text-center">
          Create a Challenge
        </h3>

        <form
          className="space-y-6  flex-col items-center justify-center"
          action="#"
        >
          <div>
            <LabelText htmlFor="username">Challenge Name</LabelText>
            <InputBox
              type="text"
              id="challengeName"
              name="challengeName"
              placeholder="Enter challenge name"
              value={formData.challengeName}
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
              value={formData.challengeDescription || ""}
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
            <ReactQuill
              theme="snow"
              className='border-2 border-gray rounded-[4px] w-full h-[10rem] text-editor flex flex-col-reverse bg-white"'
              value={value}
              onChange={setValue}
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

          {/* section for cover photo */}
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

          <Button className="w-full flex items-center justify-center">
            <p className="text-center">Create a challenge</p>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChallengeForm;
