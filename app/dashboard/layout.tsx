import type { Metadata } from "next";
import Nav from "@/components/Layout/Nav";
import SideBar from "@/components/Layout/SideBar";

export const metadata: Metadata = {
  title: "Apodex",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-full">
      <Nav />
      <div className="flex w-full h-full flex-1 relative">
        <div className="w-[18%] hidden lg:flex bg-lightBlue-100 overflow-y-auto sticky pt-20">
          <SideBar className="w-1/6 min-h-screen   hidden lg:flex flex-shrink-0   py-[2rem] px-8 border-r-[1px] border-r-[#C2C2C4]/[50%] fixed top-20 left-0" />
        </div>
        <main className=" container pt-20  h-full">{children}</main>
      </div>
    </div>
  );
}
