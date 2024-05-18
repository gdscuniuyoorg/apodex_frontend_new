"use client";

import React, { useEffect } from "react";
import HomePageImg from "@/components/Icons/HomePageImg";
import OtherChallenges from "@/components/buttons/OtherChallenges";
import VerifyBanner from "@/components/UI/VerifyBanner";
import { _getUserData } from "@/services/authServices";
import { useAppSelector, useAppDispatch } from "@/common/hooks";
import dynamic from "next/dynamic";
import { IChallenge, getAllChallenges } from "@/redux/features/challengeSlice";
import Challenge from "@/components/atoms/Challenge";
import { FETCHING } from "@/services/states";
import Loader from "@/components/UI/Loader";

const Home = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { data, status } = useAppSelector((state) => state.challenge);

  useEffect(() => {
    dispatch(getAllChallenges());
  }, [dispatch]);

  if (status === FETCHING) {
    return <Loader />;
  }

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

          {data && data.map((el) => <Challenge challenge={el} />)}
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
