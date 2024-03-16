"use client";

import { useState } from "react";
import SetUpProfile from "@/components/SetUpProfile";
import SetUpProfileTwo from "@/components/SetUpProfileTwo";
import SetUpProfileThree from "@/components/SetUpProfileThree";

export default function CompleteProfile() {
  const [page, setPage] = useState("page-one");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    nationality: "",
    techInterests: "",
    currentRole: "",
    company: "",
    portfolio: "",
    twitter: "",
    linkedin: "",
    bio: "",
  });
console.log(formData)
  return (
    <div className="h-full">
      <div className="">
        {page == "page-one" && <SetUpProfile setPage={setPage} page={page} formData={formData} setFormData={setFormData}/>}
        {page == "page-two" && <SetUpProfileTwo setPage={setPage} page={page} formData={formData} setFormData={setFormData} />}
        {page == "page-three" && <SetUpProfileThree setPage={setPage} page={page} formData={formData} setFormData={setFormData} />}
      </div>
    </div>
  );
}
