/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, Input } from "@/components/FormComponents";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

interface FormData {
  email: string;
  password: string;
}

const SignUp = () => {
  const initialFormData: FormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setEmailValid] = useState<boolean>(true);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setFormData({ ...formData, email: newEmail });
    setEmailValid(validateEmail(newEmail));
  };

  const handleGoogleAuth = (e: any) => {
    e.preventDefault();
    toast.success("Comming soon!");
  };

  return (
    <main className="w-full h-screen center">
      <section className="w-[40%] relative resize-none bg-[#001E36] lg:flex items-center justify-center hidden h-screen object-contain">
        <div>
          <div className="text-center w-[340px] mx-auto">
            <h2 className="font-semibold text-3xl text-white">
              Join Our Talent Tribe
            </h2>
            <p className="text-gray text-normal">
              Grow your career faster with a community of like-minds by
              challenging other talents and developing your skills.
            </p>
          </div>

          <div className="mx-auto h-[400px] flex-shrink-0">
            <img src="/globe.svg" alt="" className="object-cover size-full" />
          </div>
        </div>
      </section>

      <section className="lg:w-[60%] w-full h-full flex justify-center center px-4">
        <form action="#" className="lg:w-[60%] w-full flex flex-col gap-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <h2 className="font-bold text-3xl md:text-4xl">Welcome to</h2>
              <img
                src="/logo.png"
                alt="logo"
                className="object-cover w-[150px]"
              />
            </div>
            <p className="text-darkGray">Register with us today!</p>
          </div>

          <div className="flex-col flex w-full text-text gap-3">
            <h2 className="md:text-2xl text-xl font-semibold">
              Continue with...
            </h2>

            <Button
              link={handleGoogleAuth}
              classname="center gap-3 border rounded-md border-lightGray"
            >
              <img src="google.svg" alt="google" />
              <p className="font-bold md:text-xl">Google</p>
            </Button>

            <div className="flex items-center w-full gap-3">
              <div className="border-lightGray border w-1/2"></div>
              <p>or</p>
              <div className="border-lightGray border w-1/2"></div>
            </div>

            <div className="flex flex-col gap-2">
              <Input
                onChange={(e: any) => handleEmailChange(e)}
                value={formData.email}
                type="email"
                label="Email address"
                placeholder="john1234@gmail.com"
              />

              {!isEmailValid && (
                <p className="text-sm text-error">Email not valid</p>
              )}
            </div>
            <div className="">
              <Input
                onChange={(e: any) => handleEmailChange(e)}
                value={formData.password}
                type="password"
                label="Create a password"
              />
            </div>

            <Button
              validation={!formData.email || !isEmailValid}
              classname="bg-blue text-white font-semibold"
            >
              Continue
            </Button>

            <div className="flex gap-3">
              <p>Already have an account?</p>
              <Link href="/login" className="text-blue font-semibold">
                Log In
              </Link>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
