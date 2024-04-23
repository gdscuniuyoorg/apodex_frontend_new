/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter } from 'next/navigation';

import { IoNotificationsSharp } from "react-icons/io5";
import SearchIcon from "@/components/Icons/SearchIcon";
import NotificationsIcon from '@/components/Icons/NotificationsIcon';
const Nav = () => {
      const router = useRouter();

  return (
    <nav className="flex items-center justify-between px-3 lg:px-8 z-50 py-3 border-b-[1px] border-[#C2C2C4]/[50%] fixed top-0 right-0 left-0 bg-lightBlue-100">
      <img
        onClick={() => router.push(`/dashboard`)}
        role='button'
        src="/apodexLogo.png"
        alt="apodex-logo"
        className="lg:h-[4rem] h-[3rem]"
      />

      <div className="flex flex-1 items-center justify-end gap-3">
        <div className=" relative w-[50%] lg:block hidden">
          <input
            className=" border-[1px] border-neutral-300 text-neutral-300 !bg-lightBlue-100/[20%] pl-[50px] outline-none rounded-full p-3 h-[2.7rem] w-full"
            type="text"
            placeholder="Search for talent, challenges and communities"
          />
          <span className="absolute left-3 top-2.5">
            <SearchIcon />
          </span>
        </div>
        <button>
          <NotificationsIcon className=" cursor-pointer" />
        </button>
        <img
          className="rounded-full w-[40px] h-[40px] object-cover"
          src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
          alt="profile-pic"
        />
      </div>
    </nav>
  );
};

export default Nav;
