"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Lightbulb from "@/components/Icons/Lightbulb";
import Button from "@/components/buttons/Button";
// import { useHistory } from "react-router-dom";

const Page = () => {
  const router = useRouter();
  const [challengeName, setChallengeName] = useState("Default Challenge Name");
  const [challengeDescription, setChallengeDescription] = useState(
    "Default Challenge Description"
  );

  useEffect(() => {
    const storedChallengeName = localStorage.getItem("challengeName");
    const storedChallengeDescription = localStorage.getItem(
      "challengeDescription"
    );

    if (storedChallengeName) setChallengeName(storedChallengeName);
    if (storedChallengeDescription)
      setChallengeDescription(storedChallengeDescription);
  }, []);

  return (
    <div className="w-full flex container py-10">
      <div>
        <h3 className="font-semibold text-[33px] leading-[43.56px] text-[#535458] text-center md:text-left">
          Your On-going Challenges
        </h3>
        <div className="p-6 mt-5 bg-white border border-[#C2C2C44D] rounded-lg  sm:w-full md:w-[60vw] ">
          <Lightbulb></Lightbulb>
          <h2 className="text-[#535458] text-[16px] font-bold py-4">
            {challengeName}
          </h2>
          <p className="text-[#88898C]">{challengeDescription}</p>
          <div className="flex gap-5 pt-5">
            <Button className="">Submit</Button>
            <Button className=" border-none bg-[#C2C2C433] w-[93px] text-[#6D6E72] flex items-center justify-center">
              Edit
            </Button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Page;
