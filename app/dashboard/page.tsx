"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Importing useRouter from next/router
import HomeOutward from "@/components/Icons/HomeOutward";
import HomePageImg from "@/components/Icons/HomePageImg";
import Lightbulb from "@/components/Icons/Lightbulb";
import Button from "@/components/buttons/Button";

const page = () => {
    // const router = useRouter(); // Initializing useRouter

  // State variables for challenge name and description
  const [challengeName, setChallengeName] = useState("Default Challenge Name");
  const [challengeDescription, setChallengeDescription] = useState(
    "Default Challenge Description"
  );

  // Function to handle navigation to the next page
  const handleNext = () => {
    // router.push("/dashboard/challenges/edit");
  };

  // Effect to retrieve stored challenge name and description from localStorage
  useEffect(() => {
    const storedChallengeName = localStorage.getItem("challengeName");
    const storedChallengeDescription = localStorage.getItem(
      "challengeDescription"
    );

    if (storedChallengeName) setChallengeName(storedChallengeName);
    if (storedChallengeDescription)
      setChallengeDescription(storedChallengeDescription);
  }, []);

  // State variable for storing recent challenges
  const [recentChallenges, setRecentChallenges] = useState([]);

  // Effect to retrieve stored challenges from localStorage
  useEffect(() => {
    const storedChallenges = JSON.parse(
      localStorage.getItem("challenges") || "[]"
    );
    setRecentChallenges(storedChallenges);
  }, []);

  return (
    <div className="py-2">
      <div className="flex bg-[#0070CC] items-center justify-between p-2 text-[13px]">
        <p className="px-10 text-[#BECDEF]">
          Your account is not yet verified. Help us to reduce the risk of losing
          your account by verifying your account
        </p>
        <div className="flex items-center px-10">
          <a href="#" className="text-[#E0E0E1]">
            Verify Now
          </a>
          <HomeOutward />
        </div>
      </div>
      <div className="container">
        <h3 className="text-[33px] text-[#535458] font-semibold py-3">
          Welcome Back, <span className="text-[#0070CC]">John</span>
        </h3>
        <div>
          <HomePageImg />
        </div>
      </div>

      {/* Challenge Description */}
          <div className="container">
              <h2 className="py-5 font-medium text-[19px]">Challenges</h2>
        <div className="p-6 mt-5 border border-[#C2C2C44D] rounded-lg sm:w-full md:w-[50vw]  ">
          <Lightbulb />
          <h2 className="text-[#535458] text-[16px] font-bold py-4">
            Tech Ignite Hackathon 2024
          </h2>
          <p className="text-[#88898C] text-[13px]">
            💡 Bring your boldest ideas to life, network with like-minded
            innovators, and seize the opportunity to win exciting prizes and
            recognition. Whether you're a seasoned developer, a design virtuoso,
            or a visionary entrepreneur, this is your chance to showcase your
            skills, unleash your imagination, and make a real impact.
          </p>
          <div className="flex gap-5 pt-5 items-center">
            <Button
              className="p-3 bg-[#D4DDF4] text-[#0070CC]"
              onClick={handleNext}
            >
              Register Now
            </Button>
            <p className="text-[#A5A5A8] text-[13px]">
              *Registration ends in 1:364:23:59:34*
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
