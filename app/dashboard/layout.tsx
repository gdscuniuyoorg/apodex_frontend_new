"use client";

import Nav from "@/components/Layout/Nav";
import SideBar from "@/components/Layout/SideBar";
import { useState } from "react";
import { useAuth } from "@/shared/useAuth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useAuth();
  const [open, setOpen] = useState(false);
  return (
    <div
      suppressHydrationWarning
      className="h-full min-h-screen max-h-screen flex min-w-screen max-w-screen"
    >
      <SideBar open={open} setOpen={setOpen} />
      <div className="grow  overflow-y-scroll relative ">
        <Nav open={open} setOpen={setOpen} />
        <div className=" min-h-full  bg-[#F8F9FD]">{children}</div>
      </div>
    </div>
  );
}
