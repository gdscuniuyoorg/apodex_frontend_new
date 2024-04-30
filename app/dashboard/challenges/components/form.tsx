"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarForm } from "@/components/UI/datepicker";
import Tiptap from "@/components/tipTap/Tiptap";
import UserService from "@/services/userServices";
import { Button, FileUpload, Input, Select } from '@/components/FormComponents';


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

 

  return (
    <div className="w-full container lg:px-10 p-10 px-0">
      <div className=" m-auto container">
        {/* lg:w-[476px] */}
        {/* <h3 className=" font-semibold text-[33px] leadding-[43.56px] text-[#535458] py-10 text-center"> */}
        <h3 className="font-semibold text-2xl lg:text-3xl leading-10 lg:leading-[43.56px] text-[#535458] lg:py-10 py-4 text-center">
          Create a Challenge
        </h3>

        <div
          className="space-y-6  flex-col items-center justify-center"
          // action="#"
        >
          <div className="w-full flex gap-4 flex-col lg:flex-row">
            <div className="w-full">
              <Input
                onChange={(e: any) => handleChange('name', e.target.value)}
                label="Challenge Name"
                type="text"
                value={formData.name}
                placeholder="Tech Ignite 2024 Hackathon"
              />
            </div>
            <div className="w-full">
              <Select
                onChange={(e: any) =>
                  handleChange('participationType', e.target.value)
                }
                label="Participation Type "
                options={[
                  { label: 'Individual', value: 'individual' },
                  { label: 'Team', value: 'team' }
                ]}
                value={formData.participationType}
                placeholder="Select Participation Type"
              />
            </div>
          </div>

          <div className="w-full">
            <Input
              onChange={(e: any) => handleChange('description', e.target.value)}
              label="Challenge Description"
              type="textbox"
              value={formData.description}
              placeholder="Tech Ignite 2024 Hackathon"
            />
          </div>

          {/* <div className="flex items-center ">
            <input type="checkbox" name="" id="" />
            <label htmlFor="rules" className="px-3 text-[#88898C]">
              Prizes
            </label>
          </div> */}

          <div className="flex flex-col ">
            {/* <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="rules" className="px-3 text-[#88898C] ">
                Rules
              </label>
            </div>
 */}
            <label className="font-medium text-base text-[#817E7E]">
              Challange Details
            </label>

            <Tiptap
              value={tipTapContent}
              onChange={(newContent: string) => changeTiptapContent(newContent)}
            />
          </div>
          <div className="w-full flex gap-4 flex-col lg:flex-row">
            <div className="w-full">
              <Input
                onChange={(e: any) => handleChange('startTime', e.target.value)}
                label="Start Date"
                type="date"
                value={formData.startTime}
              />
            </div>

            <div className="w-full">
              <Input
                onChange={(e: any) => handleChange('endTime', e.target.value)}
                label="End Date"
                type="date"
                value={formData.endTime}
              />
            </div>
          </div>

          <div className="flex-col items-center justify-center h-full gap-3 w-full">
            <FileUpload
              image={displayPhoto.coverPhoto}
              handleFileChange={(file: File) =>
                handleFileChange(file, 'coverPhoto')
              }
            />
            <div className="flex items-center gap-1">
              <img src="/info.png" alt="info" />
              <p className="text-gray text-sm">
                Make sure your photo is not blurry
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <Button classname="lg:w-[40%] w-full flex items-center justify-center text-white ">
              Create a challenge
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeForm;
