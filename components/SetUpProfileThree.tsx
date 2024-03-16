import { ChangeEvent, Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";
import ActivePage from "./ActivePage";
import Image from "next/image";

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

export default function SetUpProfileThree({
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

        <h1 className="font-semibold text-4xl text-center">Give us a face</h1>
        <p className="text-center text-[#8D8D8D] mt-5">
          Share your best photo and tell us a bit about you
        </p>

        <ActivePage page={page} />

        <div className="">
          <button
            onClick={() => {}}
            className="w-full bg-[#0072CE] py-4 px-2 text-white font-medium text-xl text-center rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
