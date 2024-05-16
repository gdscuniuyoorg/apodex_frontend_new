"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HomePageImg from "@/components/Icons/HomePageImg";
import Lightbulb from "@/components/Icons/Lightbulb";
import Button from "@/components/buttons/Button";
import OtherChallenges from "@/components/buttons/OtherChallenges";
import Link from "next/link";
import VerifyBanner from "@/components/UI/VerifyBanner";
import { _getUserData } from "@/services/authServices";
import { useAppSelector } from "@/common/hooks";
import dynamic from "next/dynamic";

const Home = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  const handleNext = () => {
    router.push("/dashboard/challenges/terms-and-conditions");
  };

  return (
    <div className="py-2">
      <VerifyBanner />

      <div className="container">
        <h3 className="lg:text-[33px] text-2xl text-[#535458] font-semibold py-3">
          Welcome Back,{" "}
          <span className="text-[#0070CC]">
            {user?.name && user?.name.split(" ")[0]}
          </span>
        </h3>
        <HomePageImg />
      </div>

      {/* Challenge Description */}
      <div className="container flex lg:flex-row flex-col gap-5 py-10">
        <div>
          <h2 className="font-medium text-[19px] text-[#88898C]">Challenges</h2>
          <div className="p-6 mt-5 border border-[#C2C2C44D] rounded-lg sm:w-full md:w-[50vw]  ">
            <Lightbulb />
            <h2 className="text-[#535458] text-[16px] font-bold py-4">
              Tech Ignite Hackathon 2024
            </h2>
            <p className="text-[#88898C] text-[13px]">
              {`💡 Bring your boldest ideas to life, network with like-minded
            innovators, and seize the opportunity to win exciting prizes and
            recognition. Whether you're a seasoned developer, a design virtuoso,
            or a visionary entrepreneur, this is your chance to showcase your
            skills, unleash your imagination, and make a real impact.`}
            </p>
            <div className="flex lg:flex-row flex-col gap-5 pt-5 items-center">
              <Link href={"/dashboard/challenges/terms-and-conditions/123"}>
                <Button
                  className="p-3 bg-[#D4DDF4] text-[#0070CC]"
                  onClick={handleNext}
                >
                  Register Now
                </Button>
              </Link>

              <p className="text-[#A5A5A8] text-[13px]">
                *Registration ends in 1:364:23:59:34*
              </p>
            </div>
          </div>
          <div className="p-6 mt-5 border border-[#C2C2C44D] rounded-lg sm:w-full md:w-[50vw]  ">
            <Lightbulb />
            <h2 className="text-[#535458] text-[16px] font-bold py-4">
              Solana EcoSystem Ignite 2025
            </h2>
            <p className="text-[#88898C] text-[13px]">
              {`💡 Bring your boldest ideas to life, network with like-minded
            innovators, and seize the opportunity to win exciting prizes and
            recognition. Whether you're a seasoned developer, a design virtuoso,
            or a visionary entrepreneur, this is your chance to showcase your
            skills, unleash your imagination, and make a real impact.`}
            </p>
            <div className="flex lg:flex-row flex-col gap-5 pt-5 items-center">
              <Link href={"/dashboard/challenges/terms-and-conditions/121"}>
                <Button
                  className="p-3 bg-[#D4DDF4] text-[#0070CC]"
                  onClick={handleNext}
                >
                  Register Now
                </Button>
              </Link>
              <p className="text-[#A5A5A8] text-[13px]">
                *Registration ends in 1:364:23:59:34*
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 border border-[#C2C2C44D] rounded-lg sm:w-full  ">
          <h2 className="text-[19px] font-medium text-[#88898C]">Activity</h2>
          <div className="flex flex-col justify-between items-center">
            <OtherChallenges className="">
              <p className="text-[13px] text-[#535458]">
                <span className="text-[#131C2D]">GDSC </span>started a new poll
                ending in 48 hours
              </p>
              <a href="" className="text-[#0070CC] text-[16]">
                View
              </a>
            </OtherChallenges>
            <OtherChallenges className="">
              <p className="text-[13px] text-[#535458]">
                <span className="text-[#131C2D]">GDSC </span>started a new poll
                ending in 48 hours
              </p>
              <a href="" className="text-[#0070CC] text-[16]">
                View
              </a>
            </OtherChallenges>
            <OtherChallenges className="">
              <p className="text-[13px] text-[#535458]">
                <span className="text-[#131C2D]">GDSC </span>started a new poll
                ending in 48 hours
              </p>
              <a href="" className="text-[#0070CC] text-[16]">
                View
              </a>
            </OtherChallenges>
            <OtherChallenges className="">
              <p className="text-[13px] text-[#535458]">
                <span className="text-[#131C2D]">GDSC </span>started a new poll
                ending in 48 hours
              </p>
              <a href="" className="text-[#0070CC] text-[16]">
                View
              </a>
            </OtherChallenges>
            <OtherChallenges className="">
              <p className="text-[13px] text-[#535458]">
                <span className="text-[#131C2D]">GDSC </span>started a new poll
                ending in 48 hours
              </p>
              <a href="" className="text-[#0070CC] text-[16]">
                View
              </a>
            </OtherChallenges>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
