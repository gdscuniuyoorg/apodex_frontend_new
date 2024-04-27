/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, Input } from "@/components/FormComponents";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { login, loginWithGoogle } from "@/redux/features/authSlice";
import * as states from "@/services/states";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const { status, isAuth } = useAppSelector((state) => state.auth);

  const initialFormData: FormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isEmailValid, setEmailValid] = useState<boolean>(true);
  const [show, setShow] = useState(false);

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

  function submit() {
    const { email, password } = formData;
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    dispatch(login({ email, password }))
      .unwrap()
      .then((data) => {
        toast.success('You are logged in');
              router.push('/dashboard'); // Redirect to homepage or dashboard
      })
      .catch((error) => {
        // Ensure that a string is passed to toast.error
        toast.error(error.message || "An error occurred during login.");
      });
  }

  const handleGoogleAuth = async (e: Event) => {
    e.preventDefault();

    // get google init
    const url = await dispatch(loginWithGoogle());

    // change url to it
    window.location.href = url.payload;
  };

  useEffect(() => {
    // const code = new URLSearchParams(window.location.search).get("code");

    dispatch(loginWithGoogle())
      .unwrap()
      .then((data) => {
        toast.success("You are logged in");
        router.push("/"); // Redirect to homepage or dashboard
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message || "An error occurred during login.");
      });
  }, [dispatch, router]);

  useEffect(() => {
    if (isAuth) {
      const destinedPath = searchParams.get("route") || "/";
      router.push(destinedPath);
    }
  }, [isAuth, router, searchParams, status]);

  return (
    <main className="w-full h-screen flex center">
      <section className="w-[40%] relative resize-none bg-[#001E36] lg:flex items-center justify-center hidden h-screen object-contain">
        <div>
          <div className="text-center w-[340px] mx-auto">
            <h2 className="font-semibold text-3xl text-white">
              Join Our Talent Tribe
            </h2>
            <p className="text-white mt-6 text-normal">
              Grow your career faster with a community of like-minds by
              challenging other talents and developing your skills.
            </p>
          </div>

          <div className="mx-auto h-[400px] flex-shrink-0">
            <img src="/globe.svg" alt="" className="object-cover size-full" />
          </div>
        </div>
      </section>

      <section className="lg:w-[60%] w-full h-full flex justify-center pt-14 center px-4">
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
            <p className="text-darkGray">Pick up from where you left off</p>
          </div>

          <div className="flex-col flex w-full text-text gap-3">
            <h2 className="md:text-2xl text-xl font-semibold">
              Log in with...
            </h2>

            <Button
              link={handleGoogleAuth}
              classname="center gap-3 flex border justify-center items-center rounded-md border-lightGray bg-foundation !text-black"
            >
              <img src="google.svg" alt="google" />
              <p className="font-bold md:text-xl">Google</p>
            </Button>

            <div className="flex items-center ali w-full gap-3">
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
                label="Enter your password"
                type={show ? "text" : "password"}
                postIcon="/eye.svg"
                postIconAction={(e: any) => {
                  e.preventDefault();
                  setShow(show ? false : true);
                }}
              />
            </div>

            <Button
              validation={!formData.email || !isEmailValid}
              classname="bg-blue text-white rounded-sm font-semibold"
              loading={status === states.FETCHING}
              cta="Login"
              link={(e: any) => {
                e.preventDefault();
                submit();
              }}
            ></Button>

            <div className="flex gap-3">
              <p>Don&apos;t have an account?</p>
              <Link href="/sign-up" className="text-blue font-semibold">
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
