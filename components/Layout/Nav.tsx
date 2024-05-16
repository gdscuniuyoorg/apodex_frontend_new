/* eslint-disable @next/next/no-img-element */

import SearchIcon from "@/components/Icons/SearchIcon";
import NotificationsIcon from "@/components/Icons/NotificationsIcon";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/common/hooks";
import ProfileImage from "../UI/ProfileImage";

type SideBarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Nav = ({ open, setOpen }: SideBarProps) => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="shadow sticky top-0 bg-white  p-[10px_20px] lg:p-[20px] flex items-center justify-between lg:justify-end">
      <img
        onClick={() => router.push(`/dashboard`)}
        role="button"
        src="/apodex-m.png"
        alt="apodex-logo"
        className="lg:hidden flex w-[4.5rem] object-contain "
      />

      <div className="w-fit lg:w-[60%] flex items-center space-x-[20px]">
        <div className="border-[1px] w-full border-neutral-300  items-center  rounded-full px-[10px] lg:flex hidden">
          <SearchIcon />
          <input
            className="  text-neutral-300 !bg-lightBlue-100/[20%]  outline-none w-full p-3 h-[2.7rem] "
            type="text"
            placeholder="Search for talent, challenges and communities"
          />
        </div>
        <div className="flex items-center space-x-[10px] lg:space-x-[20px]">
          <button>
            <NotificationsIcon className=" cursor-pointer text-[25px]" />
          </button>
          <ProfileImage />
          <button className="lg:hidden " onClick={() => setOpen(!open)}>
            {open ? (
              <LiaTimesSolid className="text-[30px]" />
            ) : (
              <HiBars3 className="text-[30px]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
