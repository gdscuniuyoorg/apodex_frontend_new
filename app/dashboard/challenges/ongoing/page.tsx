"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Lightbulb from "@/components/Icons/Lightbulb";
import Button from "@/components/buttons/Button";
import LabelText from "@/components/Labels/Labeltext";
// import { useHistory } from "react-router-dom";

const page = () => {
  const router = useRouter();
  const [challengeName, setChallengeName] = useState("Default Challenge Name");
  const [challengeDescription, setChallengeDescription] = useState(
    "Default Challenge Description"
  );
  
  const handleNext = () => {
    router.push("/dashboard/challenges/edit");
  }
  useEffect(() => {
    const storedChallengeName = localStorage.getItem("challengeName");
    const storedChallengeDescription = localStorage.getItem(
      "challengeDescription"
    );

    if (storedChallengeName) setChallengeName(storedChallengeName);
    if (storedChallengeDescription)
      setChallengeDescription(storedChallengeDescription);
  }, []);

 
  const [recentChallenges, setRecentChallenges] = useState([]);

    useEffect(() => {
      const storedChallenges = JSON.parse(localStorage.getItem("challenges") || "[]");
      setRecentChallenges(storedChallenges);
    }, []);

  return (
    <div className="w-full container py-10 flex flex-col md:flex-row justify-between">
      <div>
        <h3 className="font-semibold text-[33px] leading-[43.56px] text-[#535458] text-center md:text-left">
          Your On-going Challenges
        </h3>
        <div className="p-6 mt-5  border border-[#C2C2C44D] rounded-lg mx-auto sm:w-full md:w-[50vw]  ">
          <Lightbulb></Lightbulb>

          <h2 className="text-[#535458] text-[16px] font-bold py-4">
            {challengeName}
          </h2>
          <p className="text-[#88898C] text-[13px]">{challengeDescription}</p>
          <div className="flex gap-5 pt-5 items-center">
            <Button className="text-white">Submit</Button>
            <Button
              className="border border-[#C2C2C44D] bg-[#EAEEFA] w-[93px] text-[#6D6E72] flex items-center justify-center"
              onClick={handleNext}
            >
              Edit
            </Button>
            <p className="text-[#A5A5A8] text-[13px]">
              *Registration ends in 1:364:23:59:34*
            </p>
          </div>
        </div>
        <div>
          <h2>Recent Challenges</h2>
        </div>
      </div>

      <div className="p-6 h-[100vh] mt-14 border border-[#C2C2C44D] rounded-lg sm:w-full md:w-[22vw]  ">
        <h2 className="text-[19px] font-semibold text-[#88898C]">
          Other Challenges
        </h2>
        <div className="flex items-center justify-between py-5 border-b border-[#C2C2C44D]">
          <p className="text-[13px] text-[#535458]">{challengeName}</p>
          <a href="" className="text-[#0070CC] text-[16]">
            View
          </a>
        </div>
        <div className="flex items-center justify-between py-5 border-b border-[#C2C2C44D]">
          <p className="text-[13px] text-[#535458]">{challengeName}</p>
          <a href="" className="text-[#0070CC] text-[16]">
            View
          </a>
        </div>
        <div className="flex items-center justify-between py-5 border-b border-[#C2C2C44D]">
          <p className="text-[13px] text-[#535458]">{challengeName}</p>
          <a href="" className="text-[#0070CC] text-[16]">
            View
          </a>
        </div>
        <div className="flex items-center justify-between py-5 border-b border-[#C2C2C44D]">
          <p className="text-[13px] text-[#535458]">{challengeName}</p>
          <a href="" className="text-[#0070CC] text-[16]">
            View
          </a>
        </div>{" "}
        <div className="flex items-center justify-between py-5 border-b border-[#C2C2C44D]">
          <p className="text-[13px] text-[#535458]">{challengeName}</p>
          <a href="" className="text-[#0070CC] text-[16]">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default page