/* eslint-disable @next/next/no-img-element */
"use client";

import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { Button, Input } from "@/components/FormComponents";
import { signUp } from "@/redux/features/authSlice";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface FormData {
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignUp = () => {
  const dispatch = useAppDispatch();
  const { status, isAuth } = useAppSelector((state) => state.auth);
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialFormData: FormData = {
    email: "",
    password: "",
    passwordConfirm: ""
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isEmailValid, setEmailValid] = useState<boolean>(true);
  const [show, setShow] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  console.log(formData)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setFormData({ ...formData, email: newEmail });
    setEmailValid(validateEmail(newEmail));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, password: newPassword });
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPasswordConfirm = e.target.value;
    setFormData({ ...formData, passwordConfirm: newPasswordConfirm });
    setPasswordMatch(newPasswordConfirm === formData.password);
  };

  const handleGoogleAuth = (e: any) => {
    e.preventDefault();
    toast.success("Comming soon!");
  };

  function submit() {
    const { email, password, passwordConfirm } = formData;
    dispatch(signUp({ email, password, passwordConfirm }))
      .unwrap()
      .then((data) => {
        toast.success("Sign up successful");
      })
      .catch((error) => {
        // Ensure that a string is passed to toast.error
        // console.log(error)
        toast.error(error);
      });
  }

  useEffect(() => {
    if (isAuth) {
      const destinedPath = searchParams.get("route") || "/complete-profile";
      router.push(destinedPath);
    }
  }, [isAuth, router, searchParams, status]);
  
  

  return (
    <main className="w-full min-h-screen flex center">
      <section className="w-[40%] relative resize-none bg-[#001E36] lg:flex items-center justify-center hidden h-screen object-contain">
        <div>
          <div className="text-center w-[340px] mx-auto">
            <h2 className="font-semibold text-3xl text-white">
              Join Our Talent Tribe
            </h2>
            <p className="text-gray-100 text-normal">
              Grow your career faster with a community of like-minds by
              challenging other talents and developing your skills.
            </p>
          </div>

          <div className="mx-auto h-[400px] flex-shrink-0">
            <img src="/globe.svg" alt="" className="object-cover size-full" />
          </div>
        </div>
      </section>

      <section className="lg:w-[60%] w-full h-full flex pt-14 justify-center center px-4">
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
              classname="center gap-3 flex border justify-center items-center rounded-md border-lightGray"
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
                onChange={(e: any) => handlePasswordChange(e)}
                value={formData.password}
                label="Create a password"
                type={show ? 'text' : 'password'}
                postIcon="/eye.svg"
                postIconAction={(e: any) => {
                  e.preventDefault();
                  setShow(show ? false : true);
                }}
              />
            </div>
            <div className="">
              <Input
                onChange={(e: any) => handleConfirmPasswordChange(e)}
                value={formData.passwordConfirm}
                label="Confirm your password"
                type={show ? 'text' : 'password'}
                postIcon="/eye.svg"
                postIconAction={(e: any) => {
                  e.preventDefault();
                  setShow(show ? false : true);
                }}
              />
              {!passwordMatch && (
                <p className="text-sm text-error">Passwords do not match</p>
              )}
            </div>

            <Button
              validation={!formData.email || !isEmailValid || !passwordMatch}
              classname="bg-primary text-white rounded-sm font-semibold"
              link={(e: any) => {
                e.preventDefault();
                submit();
              }}
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
