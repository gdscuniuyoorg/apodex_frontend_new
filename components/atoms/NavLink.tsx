import { ReactElement } from "react";
import Link from "next/link";

const NavLink = ({ icon, name }: { icon: ReactElement; name: string }) => {
  return (
    <Link
      href={`/dashboard/${name.toLowerCase()}`}
      className="font-semibold flex gap-3 flex items-center "
    >
      <span className="text-[1.7rem]"> {icon}</span> <h2 className="text-[1.1rem]">{name}</h2>
    </Link>
  );
};

export default NavLink;
