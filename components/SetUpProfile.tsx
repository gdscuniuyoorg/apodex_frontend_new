import { ChangeEvent, Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";

type TPageProps = {
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
      <div className="max-w-screen-sm mx-auto">
        <h1 className="font-semibold text-4xl text-center">
          Set up your Profile
        </h1>
        <p className="text-center text-[#8D8D8D] mt-5">
          Care to share some personal details with us?
        </p>

        <div className="mt-10 mb-7">...{/* page bar */}</div>

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
        </div>
      </div>
    </div>
  );
}
