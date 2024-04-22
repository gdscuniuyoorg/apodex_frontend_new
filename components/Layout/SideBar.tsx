/* eslint-disable @next/next/no-img-element */
"use client";

import NavLink from "../atoms/NavLink";
import { GoHomeFill } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { MdForum } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdReportProblem } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import { BsFillBagFill } from "react-icons/bs";
import NotificationsIcon from "@/components/Icons/NotificationsIcon";
import HomeIcon from "@/components/Icons/HomeIcon";
import TalentIcon from "@/components/Icons/TalentIcon";
import ForumIcon from "@/components/Icons/ForumIcon";
import ChallengeIcon from "@/components/Icons/ChallengeIcon";
import UpdatesIcon from "@/components/Icons/UpdatesIcon";
import JobListingIcon from "@/components/Icons/JobListingIcon";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import SettingsIcon from "@/components/Icons/SettingsIcon";
import SupportAgentIcon from "@/components/Icons/SupportAgentIcon";
const SideBar = ({ className }: { className: string }) => {
  return (
    <aside className={`flex flex-col justify-between ${className}`}>
      <div className="flex flex-col ">
        <div className=" border-b-[1px] border-[#C2C2C4]/[50%] flex gap-[1.5rem] flex-col pb-[1.5rem] mb-[1.5rem]">
          <NavLink name="Home" icon={<HomeIcon />} />
          <NavLink name="Talents" icon={<TalentIcon />} />{" "}
          <NavLink name="Forum" icon={<ForumIcon />} />{" "}
          <NavLink name="Challenges" icon={<ChallengeIcon />} />{" "}
          <NavLink name="Updates" icon={<UpdatesIcon />} />
          <NavLink name="Job Listings" icon={<JobListingIcon />} />
        </div>
        <div className=" flex gap-[1.5rem] flex-col">
          <NavLink name="Profiles" icon={<ProfileIcon />} />
          <NavLink name="Notifications" icon={<NotificationsIcon />} />
          <NavLink name="Settings" icon={<SettingsIcon />} />
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-between  items-center">
        <div className="text-[#a7a9ae] flex w-full items-center justify-start gap-3">
          <img
            className="rounded-full w-[40px] h-[40px] object-cover"
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
            alt="profile-pic"
          />
          <div>
            <h1 className="text-neutral-black">John Doe</h1>
            <p className="text-neutral-300 text-md">UX Designer</p>
          </div>
        </div>
        <button className="border-[1px] rounded-md p-2 border-[#C2C2C4]/[50%] flex items-center  gap-2 ">
          <SupportAgentIcon />
          <p className="text-neutral-300">Contact Support</p>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
