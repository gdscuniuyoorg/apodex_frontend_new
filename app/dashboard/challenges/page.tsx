"use client";
import React, { useState } from "react";
import { Button } from "@/components/FormComponents";
import Challengeimg from "@/components/Icons/Challengeimg";
import PlusIcon from "@/components/Icons/PlusIcon";
import ChallengeForm from "./form/page";

export default function Challenge() {
  const [showForm, setShowForm] = useState<boolean>(false);

  const hanldeShowForm = () => {
    setShowForm(true);
  };

  return (
    <>
      {showForm ? (
        <ChallengeForm />
      ) : (
        <div className="w-full container py-5">
          <div className=" lg:flex hidden flex-row items-center justify-between p-10">
            <h3 className=" font-semibold text-[33px] leadding-[43.56px] text-[#535458]">
              Challenges
            </h3>
            <Button link={hanldeShowForm} className="">
              <PlusIcon />
              <p>Create a challenge</p>
            </Button>
          </div>
          <div className="flex flex-col items-center w-full justify-center">
            <Challengeimg className="" />
          </div>
          <div className="w-full text-center flex flex-col justify-center items-center">
            <h4 className="text-[#535458] font-semibold p-2">
              Let’s Kick Things Off with a Challenge
            </h4>
            <p className=" text-[#88898C] text-[13px] lg:w-[40%]">
              You have not created any Challenge yet. You can click the button
              below or above to start. You will be able to access information
              regarding to Challenges on this page
            </p>
          </div>
          <div className="flex items-center justify-center p-5">
            <Button link={hanldeShowForm} className="">
              <PlusIcon />
              <p>Create a challenge</p>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
