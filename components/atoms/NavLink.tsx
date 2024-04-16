"use client";
import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ icon, name }: { icon: ReactElement; name: string }) => {
  const pathname = usePathname();

  return (
    <Link
      href={name === "Home" ? "/" : `/dashboard/${name.toLowerCase()}`}
      className={`font-semibold flex gap-3 items-center ${
        (pathname === "/dashboard" && name === "Home") ||
        pathname === `/dashboard/${name.toLowerCase()}`
          ? "text-black"
          : "text-[#a7a9ae]"
      }`}
    >
      <span className="text-[1.7rem]">{icon}</span>
      <h2 className="text-[1.1rem]">{name}</h2>
    </Link>
  );
};

export default NavLink;
