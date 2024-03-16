import { ChangeEvent, Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";
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

export default function SetUpProfileTwo({
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
          Let us know what you do
        </h1>
        <p className="text-center text-[#8D8D8D] mt-5">
          Give us more details so we can know you better
        </p>

        <ActivePage page={page} />

        <div className="">
          <div className="">
            <label
              className="text-[#817E7E] font-medium text-base"
              htmlFor="nationality"
            >
              Nationality
            </label>
            <InputBox
              type="text"
              id="nationality"
              value={formData.nationality}
              handleChange={handleChange}
              placeholder="Nigerian"
            />
          </div>

          <div className="">
            <label
              className="text-[#817E7E] font-medium text-base"
              htmlFor="techInterests"
            >
              Tech Interests
            </label>
            <InputBox
              type="text"
              id="techInterests"
              value={formData.techInterests}
              handleChange={handleChange}
              placeholder="UX Designer"
            />
          </div>

          <div className="">
            <label
              className="text-[#817E7E] font-medium text-base"
              htmlFor="currentRole"
            >
              Current Role <span className="text-[#D4CECE]">(Optional)</span>
            </label>
            <InputBox
              type="text"
              id="currentRole"
              value={formData.currentRole}
              handleChange={handleChange}
              placeholder="UX Designer"
            />
          </div>

          <div className="">
            <label
              className="text-[#817E7E] font-medium text-base"
              htmlFor="company"
            >
              Company <span className="text-[#D4CECE]">(Optional)</span>
            </label>
            <InputBox
              type="text"
              id="company"
              value={formData.company}
              handleChange={handleChange}
              placeholder="UX Designer"
            />
          </div>

          <button
            onClick={() => {
              window.scrollTo(0, 0);
              setPage("page-three");
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
