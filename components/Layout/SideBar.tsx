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
import SearchIcon from "@/components/Icons/SearchIcon";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { logout } from "@/redux/features/authSlice";
import { _clearToken } from "@/services/authServices";
import dynamic from "next/dynamic";
import ProfileImage from "../UI/ProfileImage";

type SideBarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SideBar = ({ open, setOpen }: SideBarProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  // console.log(user);

  const logoutAction = () => {
    dispatch(logout());
    router.push("/login");
    _clearToken();
  };

  return (
    <aside
      className={`${
        open ? "left-0" : "left-[-100%] lg:left-0"
      } min-w-[240px] transition-all w-[240px] max-w-[240px] top-0 h-screen fixed lg:relative flex flex-col bg-white justify-between p-[20px] z-20`}
    >
      <div className="flex flex-col grow lg:pt-0 pt-[3rem] items-center ">
        <div className="flex w-full items-center justify-center">
          <img
            onClick={() => router.push(`/dashboard`)}
            role="button"
            src="/apodex-D.png"
            alt="apodex-logo"
            className=" h-[6rem] lg:flex hidden object-contain"
          />
        </div>
        <div className="border-[1px] w-full border-neutral-300  items-center  rounded-full px-[10px] flex lg:hidden">
          <SearchIcon />
          <input
            className="  text-neutral-300 !bg-lightBlue-100/[20%]  outline-none w-full p-3 h-[2.7rem] "
            type="text"
            placeholder="Search for talent, challenges and communities"
          />
        </div>
        <div className="flex flex-col w-full space-y-[15px] lg:space-y-[25px] mt-[15%]">
          {links.slice(0, 6).map((link, index) => (
            <NavLink name={link.name} icon={link.icon} key={index} />
          ))}
        </div>
        <div className="flex flex-col w-full space-y-[15px] lg:space-y-[25px] border-t border-[#C2C2C44D] pt-[10px] mt-[10%]">
          {links.slice(6, links.length).map((link, index) => (
            <NavLink name={link.name} icon={link.icon} key={index} />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between w-full gap-3 items-center">
        <div className="text-[#a7a9ae] flex w-full items-center justify-start gap-3 ">
          <ProfileImage />
          <div>
            <h1 className="text-neutral-black">
              {user?.firstName} {user?.lastName}
            </h1>
            <p className="text-neutral-300 text-md">{user?.currentRole}</p>
          </div>
        </div>
        <button className="border-[1px] rounded-md p-2 border-[#C2C2C4]/[50%] flex items-center  gap-2 w-full justify-center">
          <SupportAgentIcon />
          <p className="text-neutral-300">Contact Support</p>
        </button>
        <div
          role="button"
          className="border-[1px] w-full center rounded-md p-2 border-[#C2C2C4]/[50%]"
          onClick={logoutAction}
        >
          Log Out
        </div>
      </div>
    </aside>
  );
};

export default dynamic(() => Promise.resolve(SideBar), { ssr: false });

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
    name: "Profile",
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
