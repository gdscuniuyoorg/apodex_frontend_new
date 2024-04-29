/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";

import { IoNotificationsSharp } from "react-icons/io5";
import SearchIcon from "@/components/Icons/SearchIcon";
import NotificationsIcon from "@/components/Icons/NotificationsIcon";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

type SideBarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};


const Nav = ({open, setOpen}: SideBarProps) => {
  return (
    <div className="shadow sticky top-0 bg-white  p-[15px_20px] lg:p-[20px] flex items-center justify-end">
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
          <img
            className="rounded-full w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] object-cover border"
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
            alt="profile-pic"
          />
          <button className="lg:hidden " onClick={()=> setOpen(!open)}>
            {open?  <LiaTimesSolid className="text-[30px]" /> :  <HiBars3 className="text-[30px]" />}
         
          </button>
        </div>
      </div>
      {/* <div className="flex w-full  items-center justify-end gap-3">
        
        
      </div> */}
    </div>
  );
};

export default Nav;

{
  /* <nav className="flex items-center justify-between px-3 lg:px-8 z-50 py-3  bg-lightBlue-100">
      


</nav> */
}

//fixed top-0 right-0 left-0
