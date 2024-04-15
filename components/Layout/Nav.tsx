import { IoNotificationsSharp } from "react-icons/io5";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between h-[5rem] px-8">
      <img src="/logo.png" alt="apodex-logo" className="h-[7rem]" />

      <div className="flex flex-1 items-center justify-end gap-3">
        <input
          className="border border-1 border-gray-200 outline-none rounded-2xl p-3 h-[2.7rem] w-[50%]"
          type="text"
          placeholder="Search for talent, challenges and communities"
        />
        <IoNotificationsSharp className="text-[1.6rem] text-gray-200" />
        <img
          className="rounded-full w-[3.5rem]"
          src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
          alt="profile-pic"
        />
      </div>
    </nav>
  );
};

export default Nav;
