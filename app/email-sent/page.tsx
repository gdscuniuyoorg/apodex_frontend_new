"use client";

import React, { useState } from "react";
import EmailSentImg from "@/components/Icons/EmailSentImg";
import { Input, Button } from "@/components/molecules/FormComponents";
import { useRouter } from "next/navigation";
import Link from "next/link";

const EmailSent = () => {
  return (
    <div className="h-[100vh] container flex flex-col items-center justify-center">
      <EmailSentImg />
      <div className="lg:w-[537px] w-full mx-auto">
        <div className="text-center">
          <h2 className="pt-5 text-[#535458] font-semibold text-[33px]">
            E-mail sentWe have sent your link for resetting your password. Don’t
            forget to check your spams folder if you can’t find it
          </h2>
          <p className="text-[#535458] pt-3 text-[16px]">
            We have sent your link for resetting your password. Don’t forget to
            check your spams folder if you can’t find it
          </p>
        </div>

        <div className="flex items-center justify-center pt-5">
          <Link href="/forgotten-password" className="text-blue font-semibold">
            Resend
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
