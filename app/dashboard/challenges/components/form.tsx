"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarForm } from "@/components/UI/datepicker";
import Tiptap from "@/components/tipTap/Tiptap";
import UserService from "@/services/userServices";
import { Button, FileUpload, Input } from "@/components/FormComponents";


interface FormData {
  name: string;
  description: string;
  participationType: string;
  startTime: string;
  endTime: string;
  rules: string;
}

interface ImageFormData {
  coverPhoto: string;
}

const ChallengeForm = () => {
  const initialFormData: FormData = {
    name: "",
    description: "",
    participationType: "",
    startTime: "",
    endTime: "",
    rules: "",
  };

  const router = useRouter();

  const [tipTapContent, setTipTapContent] = useState<string>("");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [displayPhoto, setDisplayPhoto] = useState<ImageFormData>({
    coverPhoto: "",
  });

  const [value, setValue] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const changeTiptapContent = (reason: any) => {
    setTipTapContent(reason);
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

  const uploadImage = async (file: File) => {
    try {
      const result = await UserService.uploadUserImage(file);
      console.log(result);
    } catch (error) {
      console.error("Error uploading image: ", error);
      return "";
    }
  };

  const handleFileChange = async (
    file: File | null,
    fieldName: keyof ImageFormData
  ) => {
    if (file) {
      const imageUrl = await uploadImage(file);
      setDisplayPhoto({
        coverPhoto: String(imageUrl),
      });
    }
  };

  // const validateForm = () => {
  //   // Check if all required fields are filled out
  //   const { challengeName, challengeDescription, Add, start, end, pho, rules } = formData;
  //   if (
  //     challengeName.trim() !== "" &&
  //     challengeDescription.trim() !== "" &&
  //     Add.trim() !== "" &&
  //     start.trim() !== "" &&
  //     end.trim() !== "" &&
  //     pho.trim() !== "" &&
  //      rules.trim() !== ""

  //   ) {
  //     setIsFormValid(true);
  //   } else {
  //     setIsFormValid(false);
  //   }
  // };

  // const fileUpload = useRef<HTMLDivElement>(null);
  // const [isDragging, setIsDragging] = useState<boolean>(false);

  // const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  //   setIsDragging(true);
  // };

  // const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  //   setIsDragging(true);
  // };

  // const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  //   setIsDragging(false);
  // };

  // const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  //   setIsDragging(false);

  //   const files = event.dataTransfer.files;
  //   // Process the dropped files
  //   console.log(files);
  // };

  // const handleNext = () => {
  //   router.push("/dashboard/challenges/ongoing");

  //   localStorage.setItem("challengeName", challengeName);
  //   localStorage.setItem("challengeDescription", challengeDescription);
  // };

  // const handlePrev = () => {
  //   router.push("/challenges");
  // };

  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  //   // Use the name to determine which state variable to update
  //   if (name === "challengeName") {
  //     setChallengeName(value);
  //   } else if (name === "challengeDescription") {
  //     setChallengeDescription(value);
  //   }
  // };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();

  //   // this is the tip tap content, you can add it to your form data
  //   console.log(tipTapContent);

  //   console.log("Form data:", formData);

  //   setFormData({
  //     challengeName: "",
  //     challengeDescription: "",
  //     Add: "",
  //     start: "",
  //     end: "",
  //     pho:"",
  //     rules: tipTapContent,
  //   });
  // };

  return (
    <div className="w-full container lg:px-10 p-10 px-0">
      <div className="lg:w-[476px] m-auto">
        {/* <h3 className=" font-semibold text-[33px] leadding-[43.56px] text-[#535458] py-10 text-center"> */}
        <h3 className="font-semibold text-2xl lg:text-3xl leading-10 lg:leading-[43.56px] text-[#535458] py-10 text-center">
          Create a Challenge
        </h3>

        <div
          className="space-y-6  flex-col items-center justify-center"
          // action="#"
        >
          <div className="w-full">
            <Input
              onChange={(e: any) => handleChange("name", e.target.value)}
              label="Challenge Name"
              type="text"
              value={formData.name}
              placeholder="Tech Ignite 2024 Hackathon"
            />
          </div>

          <div className="w-full">
            <Input
              onChange={(e: any) => handleChange("description", e.target.value)}
              label="Challenge Description"
              type="text"
              value={formData.description}
              placeholder="Tech Ignite 2024 Hackathon"
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

          <div className="w-full">
            <Input
              onChange={(e: any) => handleChange("startTime", e.target.value)}
              label="Start Date"
              type="date"
              value={formData.startTime}
            />
          </div>

          <div className="w-full">
            <Input
              onChange={(e: any) => handleChange("endTime", e.target.value)}
              label="End Date"
              type="date"
              value={formData.endTime}
            />
          </div>

          <div className="flex-col items-center justify-center h-full gap-3 w-full">
            <FileUpload
              image={displayPhoto.coverPhoto}
              handleFileChange={(file: File) =>
                handleFileChange(file, "coverPhoto")
              }
            />
            <div className="flex items-center gap-1">
              <img src="/info.png" alt="info" />
              <p className="text-gray text-sm">
                Make sure your photo is not blurry
              </p>
            </div>
          </div>

          <Button classname="w-full flex items-center justify-center text-white ">
            Create a challenge
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeForm;
