/* eslint-disable @next/next/no-img-element */

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
import { useRouter } from "next/navigation";


type SideBarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};


const SideBar = ({ open, setOpen}: SideBarProps) => {
  const router = useRouter();

  return (
    <aside
      className={`${open ? "left-0" : "left-[-100%] lg:left-0"} min-w-[240px] transition-all w-[240px] max-w-[240px] top-0 h-screen fixed lg:relative flex flex-col bg-white justify-between p-[20px] z-20`}
    >
      <div className="flex flex-col grow items-center ">
      <img
        onClick={() => router.push(`/dashboard`)}
        role="button"
        src="/apodexLogo.png"
        alt="apodex-logo"
        className="lg:h-[3rem] h-[3rem] w-[150px]"
      />
      <div className="flex flex-col w-full space-y-[15px] lg:space-y-[25px] mt-[15%]">
      {
        links.slice(0,6).map((link, index) => (
          <NavLink name={link.name} icon={link.icon} key={index}/>
        ))
      }
      </div>
      <div className="flex flex-col w-full space-y-[15px] lg:space-y-[25px] border-t border-[#C2C2C44D] pt-[10px] mt-[10%]">
      {
        links.slice(6,links.length).map((link, index) => (
          <NavLink name={link.name} icon={link.icon} key={index}/>
        ))
      }
      </div>
       
      </div>
      
      <div className="flex flex-col justify-between w-full gap-3 items-center">
        <div className="text-[#a7a9ae] flex w-full items-center justify-start gap-3 ">
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
        <button className="border-[1px] rounded-md p-2 border-[#C2C2C4]/[50%] flex items-center  gap-2 w-full justify-center">
          <SupportAgentIcon />
          <p className="text-neutral-300">Contact Support</p>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;

const links = [
  {
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    name: "Talents",
    icon: <TalentIcon />,
  },
  {
    name: "Forum",
    icon: <ForumIcon />,
  },
  {
    name: "Challenges",
    icon: <ChallengeIcon />,
  },
  {
    name: "Updates",
    icon: <UpdatesIcon />,
  },
  {
    name: "Job Listings",
    icon: <JobListingIcon />,
  },
  {
    name: "Profiles",
    icon: <ProfileIcon />,
  },
  {
    name: "Notifications",
    icon: <NotificationsIcon />,
  },
  {
    name: "Settings",
    icon: <SettingsIcon />,
  },
];
