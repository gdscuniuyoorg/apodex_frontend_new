"use client";
import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { getChallenge } from "@/redux/features/challengeSlice";
import { FETCHING } from "@/services/states";
import Loader from "@/components/UI/Loader";
import DOMPurify from "isomorphic-dompurify";
import Button from "@/components/buttons/Button";

const TermsAndConditions = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { singleChallenge, status } = useAppSelector(
    (state) => state.challenge
  );

  useEffect(() => {
    dispatch(getChallenge(id as string));
  }, [dispatch, id]);

  const handlePrev = () => {
    router.push("/dashboard");
  };

  const handleNext = () => {
    try {
      router.push(`/dashboard/challenges/terms-and-conditions/${id}/team-form`);
    } catch (error) {
      console.error("Failed to navigate:", error);
    }
  };

  if (status === FETCHING) {
    return <Loader />;
  }
  return (
    <div className="">
      {/* <div className="bg-[#D9D9D9] w-full h-40 sticky top-0"></div> */}
      <div className="flex justify-between container py-10">
        <div className=" lg:flex hidden flex-col">
          <h2 className="font-medium text-[16px] text-[#535458]">Details</h2>
          <div className="flex flex-col py-3 text-[13px] text-[#88898C]">
            <a href="#Details" className="pt-2">
              Specifics
            </a>
            <a href="#Prizes" className="pt-2">
              Prizes
            </a>
            <a href="#Rules" className="pt-2">
              Rules
            </a>
          </div>
        </div>
        <div className="lg:w-[65%] w-full m-auto">
          <div>
            <h2
              className="text-[33px] font-semibold text-[#535458] text-center"
              id="Details"
            >
              {singleChallenge?.name}
            </h2>
            <p className="text-[16px] text-[#88898C] pt-5">
              {`Join us for an exhilarating weekend of innovation and
              collaboration at our tech-themed hackathon! Whether you're a
              seasoned coder, designer, or a tech enthusiast eager to learn,
              this event is perfect for you. Dive into a whirlwind of creativity
              as teams brainstorm, code, and prototype solutions to real-world
              challenges. With expert mentors, cutting-edge technologies, and
              fantastic prizes up for grabs, it's an opportunity to showcase
              your skills, network with fellow techies, and bring your boldest
              ideas to life. Let's hack the future together!`}
            </p>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(singleChallenge?.rules || ""),
            }}
          >
            {}
          </div>

          <div className="w-full flex flex-row gap-5  py-5">
            <Button
              onClick={handlePrev}
              className="bg-[#D4DDF4] text-[#0070CC] w-full font-semibold items-center justify-center"
            >
              Decline
            </Button>
            <Button
              onClick={handleNext}
              className="bg-blue text-white rounded-sm w-full font-semibold items-center justify-center"
            >
              Agree
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
