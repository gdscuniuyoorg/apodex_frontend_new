import { ChangeEvent, Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import ActivePage from "./ActivePage";

type TPageProps = {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
  formData: {
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
    nationality: string;
    techInterests: string;
    currentRole: string;
    company: string;
    portfolio: string;
    twitter: string;
    linkedin: string;
    bio: string;
  };
  setFormData: Dispatch<
    SetStateAction<{
      firstName: string;
      lastName: string;
      password: string;
      confirmPassword: string;
      nationality: string;
      techInterests: string;
      currentRole: string;
      company: string;
      portfolio: string;
      twitter: string;
      linkedin: string;
      bio: string;
    }>
  >;
};

export default function SetUpProfile({
  page,
  setPage,
  formData,
  setFormData,
}: TPageProps) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="max-w-screen-sm mx-auto pb-10">
        <div className="mx-auto w-max">
          <Image
            src="/logo.png"
            alt="Logo"
            height={60}
            width={78}
            className="object-cover"
          />
        </div>

        <h1 className="font-semibold text-4xl text-center">
          Set up your Profile
        </h1>
        <p className="text-center text-[#8D8D8D] mt-5">
          Care to share some personal details with us?
        </p>

        <ActivePage page={page} />

        <div className="">
          <div className="">
            <label
              className="text-[#817E7E] font-medium text-base"
              htmlFor="firstName"
            >
              First Name
            </label>
            <InputBox
              type="text"
              id="firstName"
              value={formData.firstName}
              handleChange={handleChange}
              placeholder="John"
            />
          </div>

          <div className="">
            <label
              className="text-[#817E7E] font-medium text-base"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <InputBox
              type="text"
              id="lastName"
              value={formData.lastName}
              handleChange={handleChange}
              placeholder="Doe"
            />
          </div>

          <div className="">
            <label className="text-[#817E7E] font-medium text-base" htmlFor="">
              Set Password
            </label>
            <InputBox
              type="password"
              id="password"
              value={formData.password}
              handleChange={handleChange}
            />
          </div>

          <div className="">
            <label className="text-[#817E7E] font-medium text-base" htmlFor="">
              Confirm Password
            </label>
            <InputBox
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              handleChange={handleChange}
            />
          </div>

          <button
            onClick={() => {
              window.scrollTo(0, 0);
              setPage("page-two");
            }}
            className="w-full bg-[#0072CE] py-4 px-2 text-white font-medium text-xl text-center rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
