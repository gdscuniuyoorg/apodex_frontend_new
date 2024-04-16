"use client";
import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ icon, name }: { icon: ReactElement; name: string }) => {
  const pathname = usePathname();

  const activeClass =
    (pathname === "/dashboard" && name === "Home") ||
    pathname === `/dashboard/${name.toLowerCase()}`
      ? "text-black font-bold"
      : "text-[#a7a9ae]";

  return (
    <Link
      href={name === 'Home' ? '/dashboard' : `/dashboard/${name.toLowerCase()}`}
      className={`font-light flex gap-3 items-center ${activeClass}`}
    >
      <span className="text-[1.7rem] w-6 flex items-center justify-center">
        {icon}
      </span>
      <h4 className={`text-[1.1rem] font-Switzer ${activeClass}`}>{name}</h4>
    </Link>
  );
};

export default NavLink;
