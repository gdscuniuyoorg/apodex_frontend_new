"use client"
import React, { useState } from "react";
import InputBox from '@/components/Inputs/InputBox';
import LabelText from '@/components/Labels/Labeltext';
import Button from "@/components/buttons/Button";

const TeamForm = () => {

   const [formData, setFormData] = useState({
     teamName: "",
     teamMates: "",
     projectName: "",
     projectDescription: "",
     shareLink: "",
   });
   
  return (
    <div className="w-full container lg:px-10 p-10 px-0">
      <div className="lg:w-[476px] m-auto">
        <h3 className="font-semibold text-2xl lg:text-3xl leading-10 lg:leading-[43.56px] text-[#535458] py-10 text-center">
          Tech Ignite Hackathon 2024
        </h3>

        <div
          className="space-y-6  flex-col items-center justify-center"
          // action="#"
        >
          <div>
            <LabelText htmlFor="teamName">Team Name</LabelText>
            <InputBox
              type="text"
              id="teamName"
              name="teamName"
              placeholder="Top Tech Stars Team"
              value={formData.teamName}
              // handleChange={}
            />
          </div>

          <div>
            <LabelText htmlFor="teamMates">Add your TeamMates</LabelText>
            <InputBox
              type="select"
              id="teamMates"
              name="teamMates"
              placeholder="Blessing"
              value={formData.teamMates}
              // handleChange={}
            />
          </div>

          <div>
            <LabelText htmlFor="projectName">Project Name</LabelText>
            <InputBox
              type="text"
              id="projectName"
              name="projectName"
              placeholder="Solana Ecosystem"
              value={formData.projectName}
            />
          </div>

          <div>
            <LabelText htmlFor="projectName">Project Description</LabelText>
            <InputBox
              type="text"
              id="projectDescription"
              name="projectDescription"
              placeholder=""
              value={formData.projectDescription}
            />
          </div>

          <div>
            <LabelText htmlFor="shareLink">
              Share a link to a Google Docs file to describe your idea
            </LabelText>
            <InputBox
              type="text"
              id="shareLink"
              name="shareLink"
              placeholder=""
              value={formData.shareLink}
            />
          </div>

          <Button className="w-full">Register</Button>
        </div>
      </div>
    </div>
  );
}

export default TeamForm
