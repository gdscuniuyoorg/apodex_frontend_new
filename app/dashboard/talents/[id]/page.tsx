/* eslint-disable @next/next/no-img-element */
"use client";

import { useAppDispatch, useAppSelector } from "@/common/hooks";
import Loader from "@/components/UI/Loader";
import { getProfile } from "@/redux/features/profileSlice";
import { FETCHING } from "@/services/states";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Fragment, useEffect } from "react";

const TalentProfile = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProfile(id as string));
  }, [dispatch]);

  const { data, status } = useAppSelector((state) => state.profile);

  const hobbies = ["Fishing", "Hunting", "Eating", "Movies"];
  const skills = [
    "Laravel",
    "React",
    "React Native",
    "Nodejs",
    "Kotlin",
    "Swift",
    "Communication",
    "Researching",
  ];

  return (
    <main className="lg:px-10 p-10 px-0 gap-10 w-full flex flex-col">
      {status === FETCHING && <Loader />}
      {data && (
        <Fragment>
          <Link href="/dashboard/talents" className="">
            <Image
              src="/back.png"
              alt="back"
              height={80}
              width={18}
              className="cursor-pointer"
            />
          </Link>
          <section className="flex-col w-full text-[#535458]">
            <div className="w-full gap-10 min-h-[227px] flex lg:flex-row flex-col">
              <div className="h-[227px]">
                <img
                  src={data.displayPhoto}
                  alt={`${data.name} display photo`}
                  style={{ backgroundPosition: "center center" }}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <div className="w-full flex-col gap-2 flex">
                <div className="flex lg:flex-row flex-col between">
                  <p className="text-2xl text-black font-semibold">
                    {data.name}
                  </p>
                  <div className="center gap-4">
                    {data.linkedInUrl && (
                      <a href={data.linkedInUrl} target="_blank">
                        <img src="/linkedin.png" alt="linkedin Logo" />
                      </a>
                    )}
                    {data.twitterUrl && (
                      <a href={data.twitterUrl} target="_blank">
                        <img src="/twitter.png" alt="twitter Logo" />
                      </a>
                    )}
                    <a
                      href="#"
                      target="_blank"
                      className="center ml-6 gap-2 p-2 border border-lightGray"
                    >
                      <img src="/share.png" alt="share Logo" />
                      <p>Share</p>
                    </a>
                  </div>
                </div>
                <p>
                  <span className="font-semibold">{data.currentRole}</span> at{" "}
                  <span className="font-semibold">{data.company}</span>
                </p>
                <div className="flex gap-2">
                  <img
                    src="/location.png"
                    alt="location logo"
                    className="object-contain"
                  />
                  <p>{data.location}</p>
                </div>
                <p className="mt-6">Bio</p>
                <div className="flex lg:flex-row flex-col between">
                  <p className="lg:w-[70%]">{data.bio || ""}</p>
                  {data.portfolioUrl && (
                    <a
                      href={data.portfolioUrl}
                      target="_blank"
                      className="center ml-6 gap-2 p-3 border border-lightGray"
                    >
                      <img src="/view.png" alt="view Logo" />
                      <p>View Portfolio</p>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full border-b-[1px] border-[#C2C2C44D] my-8" />
            <div className="w-full flex lg:flex-row flex-col justify-between gap-10">
              <section className="flex flex-col gap-4">
                {data.education && (
                  <Fragment>
                    <p>Education</p>
                    <div className="flex flex-col gap-1">
                      <p>University of Uyo</p>
                      <p className="text-black">
                        Mechanical Engineering -{" "}
                        <span className="italic"> BSc</span>
                      </p>
                      <p className="italic text-gray">Sept 2018 - Present </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <p>Topfaith International Secondary School</p>
                      <p className="text-black">
                        Engineering Major -{" "}
                        <span className="italic"> WASSCE</span>
                      </p>
                      <p className="italic text-gray">Sept 2016 - June 2018</p>
                    </div>
                  </Fragment>
                )}
                {data.language && (
                  <Fragment>
                    <p className="mt-6">Languages</p>
                    <div className="flex flex-col gap-1">
                      <p className="text-black">
                        English Language{" "}
                        <span className="italic"> (preferred)</span>
                      </p>
                      <p className="italic text-gray">B2</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-black">Igbo Language</p>
                      <p className="italic text-gray">C2</p>
                    </div>
                  </Fragment>
                )}

                {data.techInterests && (
                  <Fragment>
                    <p className="mt-6">Tech Interests</p>
                    <div className="flex gap-3 flex-wrap w-full">
                      {data.techInterests.map((interest, index) => (
                        <div key={index} className="bg-[#E0E0E1] p-2">
                          {interest}
                        </div>
                      ))}
                    </div>
                  </Fragment>
                )}
              </section>
              <section className="w-[55%] flex flex-col gap-4">
                {data.workExperience && (
                  <Fragment>
                    <div className="between">
                      <p>Work Experience</p>
                      <a href="#" target="_blank" className="center ml-6 gap-2">
                        <img src="/download.png" alt="download Logo" />
                        <p>Resume</p>
                      </a>
                    </div>

                    <div className="flex flex-col gap-1 p-3 border-[#C2C2C44D] border">
                      <p>NewCastle Jobs</p>
                      <p className="text-black">Principal React Developer</p>
                      <p className="italic text-gray">Dec 2018 - Present</p>
                    </div>
                    <div className="flex flex-col gap-1 p-3 border-[#C2C2C44D] border">
                      <p>Shopify</p>
                      <p className="text-black">Staff React Developer</p>
                      <p className="italic text-gray">Aug 2016 - Nov 2018</p>
                    </div>
                  </Fragment>
                )}
                <p className="mt-6">Skills & Tools</p>
                <div className="flex gap-3 flex-wrap w-full">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-[#E0E0E1] p-2">
                      {skill}
                    </div>
                  ))}
                </div>

                {data.hobbies && (
                  <Fragment>
                    <p className="mt-6">Hobbies</p>
                    <div className="flex gap-3 flex-wrap">
                      {hobbies.map((hobby, index) => (
                        <div key={index} className="bg-[#E0E0E1] p-2">
                          {hobby}
                        </div>
                      ))}
                    </div>
                  </Fragment>
                )}
              </section>
            </div>
          </section>
        </Fragment>
      )}
    </main>
  );
};

export default TalentProfile;
