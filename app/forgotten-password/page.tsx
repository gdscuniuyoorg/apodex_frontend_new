"use client";

import React, { useState } from "react";
import ForgotPasswordImg from "@/components/Icons/ForgotPasswordImg";
import { Input, Button } from "@/components/FormComponents";
import Link from "next/link";

interface FormData {
  emailAdress: string;
}

const ForgotPassword = () => {
  const initialFormData: FormData = {
    emailAdress: "",
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);

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

  return (
    <div className="h-[100vh] container flex flex-col items-center justify-center">
      <ForgotPasswordImg />
      <div className="lg:w-[537px] w-full mx-auto">
        <div className="text-center">
          <h2 className="pt-5 text-[#535458] font-semibold text-[33px]">
            Forgot Your Password?
          </h2>
          <p className="text-[#535458] pt-3 text-[16px]">
            Enter the email that is associated with your account so we can send
            you a link for resetting your password
          </p>
        </div>
        <div className="pt-5">
          <Input
            onChange={(e: any) => handleChange("emailAdress", e.target.value)}
            label="Email Address"
            type="text"
            value={formData.emailAdress}
            placeholder="Johndoe123@gmail.com"
          />
        </div>
        <div className="pt-5">
          <Button classname="w-full">Send</Button>
        </div>
        <div className="flex items-center justify-center pt-5">
          <Link href="/login" className="text-blue font-semibold">
            Back to Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
