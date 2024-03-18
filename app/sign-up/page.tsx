'use client';

import { Button, Input } from '@/components/FormComponents';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface FormData {
  email: string;
}

const SignUp = () => {
  const initialFormData: FormData = {
    email: ''
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [email, setEmail] = useState<string>('');
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
    toast.success('Comming soon!');
  };

  return (
    <main className="w-full h-screen center">
      <section className="w-[40%] lg:flex hidden h-screen object-contain ">
        <img
          src="/assets/img/createAccountImage.png"
          className="w-full  object-cover"
          alt="globe"
        />
      </section>

      {/* <section className="w-full h-full center">
        <form action="#" className="w-2/3 flex flex-col gap-10">
=======
        </div>
        <img src="globe.png" alt="globe" className="size-full object-contain" />
      </section> */}

      <section className="lg:w-[65%] w-full h-full flex justify-center center px-4">
        <form action="#" className=" lg:w-[60%] w-full flex flex-col gap-10">
          <div className="flex flex-col items-start gap-2">
            <div className="flex gap-10">
              <h2 className="font-bold text-lg md:text-xl">Welcome to</h2>
              <img
                src="/logo2.png"
                alt="logo"
                className="object-cover w-[80px]"
              />
            </div>
            <p className="text-darkGray">Register with us today!</p>
          </div>

          <div className="flex-col flex w-full text-text gap-6">
            <h2 className="md:text-[29px] text-md font-bold">
              Create an account with...
            </h2>

            <Button
              link={handleGoogleAuth}
              classname="center gap-3 border border-lightGray"
            >
              <img src="google.png" alt="google" />
              <p className="font-bold md:text-md">Google</p>
            </Button>

            <div className="center w-full gap-2">
              <div className="border-lightGray border w-1/2"></div>
              <p>or</p>
              <div className="border-lightGray border w-1/2"></div>
            </div>

            <div className="flex flex-col gap-2">
              <Input
                onChange={(e: any) => handleEmailChange(e)}
                value={formData.email}
                label="Email"
                placeholder="thiejdbfhhth@gmail.com"
              />

              {!isEmailValid && (
                <p className="text-sm text-error">Email not valid</p>
              )}
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
                Login
              </Link>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
