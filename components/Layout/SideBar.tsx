import NavLink from "../atoms/NavLink";
import { GoHomeFill } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { MdForum } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdReportProblem } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import { BsFillBagFill } from "react-icons/bs";

const SideBar = ({ className }: { className: string }) => {
  return (
    <aside className={className}>
      <div className="flex flex-col gap-3">
        <div className="border-b flex gap-3 flex-col">
          <NavLink name="Home" icon={<GoHomeFill />} />
          <NavLink name="Talents" icon={<IoIosPeople />} />{" "}
          <NavLink name="Forum" icon={<MdForum />} />{" "}
          <NavLink name="Challenges" icon={<MdReportProblem />} />{" "}
          <NavLink name="Updates" icon={<MdUpdate />} />
          <NavLink name="Job Listings" icon={<GoHomeFill />} />
        </div>
        <div className=" flex gap-2 flex-col">
          <NavLink name="Profiles" icon={<CgProfile />} />
          <NavLink name="Notifications" icon={<GoHomeFill />} />
          <NavLink name="Settings" icon={<BsFillBagFill />} />
        </div>
      </div>
      <div>
        <h1>John Doe</h1>
        <p>Contact Support</p>
      </div>
    </aside>
  );
};

export default SideBar;
