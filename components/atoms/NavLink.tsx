"use client";
import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ icon, name }: { icon: ReactElement; name: string }) => {
  const pathname = usePathname();

  const isActive =
    (pathname === "/dashboard" && name === "Home") ||
    pathname === `/dashboard/${name.toLowerCase()}`;

  const baseClass = `flex gap-3 items-center w-full hover:text-[#1A3256] hover:font-bold`;
  const activeClass = isActive
    ? "text-[#1A3256] font-bold"
    : "text-[#a7a9ae] font-light ";

  return (
    <Link
      href={name === "Home" ? "/dashboard" : `/dashboard/${name.toLowerCase()}`}
      className={`${baseClass} ${activeClass}`}
    >
      <span className="text-[1.7rem] w-6 flex items-center justify-center">
        {icon}
      </span>
      <h4 className="text-[1.1rem] font-Switzer">{name}</h4>
    </Link>
  );
};

export default NavLink;
