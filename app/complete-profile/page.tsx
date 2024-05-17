/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, ChangeEvent } from "react";
import toast from "react-hot-toast";
import UserService from "@/services/userServices";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { completeUserProfile } from "@/redux/features/userSlice";
import Image from "next/image";
import { Button, FileUpload, Input } from "@/components/FormComponents";
import ActivePage from "@/components/ProfileSetUp/ActivePage";
import { useRouter } from "next/navigation";
import { FETCHING } from "@/services/states";

interface UserInfoType {
  firstName: string;
  lastName: string;
  name?: string;
  location: string;
  techInterests: string[];
  currentRole: string;
  company: string;
  portfolioUrl: string;
  twitterUrl: string;
  linkedInUrl: string;
  bio: string;
}

export default function CompleteProfile() {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.profile);

  const [userInfo, setUserInfo] = useState<UserInfoType>({
    firstName: "",
    lastName: "",
    bio: "",
    location: "",
    techInterests: [],
    currentRole: "",
    company: "",
    portfolioUrl: "",
    twitterUrl: "",
    linkedInUrl: "",
  });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [inputInterest, setInputInterest] = useState<string>("");
  const [displayPhoto, setDisplayPhoto] = useState<File | string>("");
  const [isUrlValid, setIsUrlValid] = useState({
    portfolioUrl: true,
    twitterUrl: true,
    linkedInUrl: true,
  });

  const nextStep = () => {
    setCurrentStep((prevStep: number) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep: number) => prevStep - 1);
  };

  const handleInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputInterest(event.target.value);
  };

  const handleInterestKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && inputInterest.trim() !== "") {
      event.preventDefault();
      if (userInfo.techInterests.length < 5) {
        addInterest(inputInterest.trim());
      }
    }
  };

  const addInterest = (interest: string) => {
    if (
      !userInfo.techInterests.includes(interest) &&
      userInfo.techInterests.length < 5
    ) {
      setUserInfo((prevData) => ({
        ...prevData,
        techInterests: [...prevData.techInterests, interest],
      }));
      setInputInterest("");
    }
  };

  const removeInterest = (interest: string) => {
    setUserInfo((prevData) => ({
      ...prevData,
      techInterests: prevData.techInterests.filter((i) => i !== interest),
    }));
  };

  const handleChange = (label: any, data: any) => {
    setUserInfo((prevData) => {
      const newData = {
        ...prevData,
        [label]: data,
      };

      return newData;
    });
  };

  const handleImageChange = async (file: any) => {
    const imgUrl = URL.createObjectURL(file);
    setDisplayPhoto(file);
  };

  const completeProfileHandler = async (
    data: UserInfoType,
    imageBlob: File | string
  ) => {
    try {
      const userPromise = UserService.completeProfile(data);
      const imagePromise = UserService.uploadUserImage(imageBlob);

      // Use Promise.all to wait for both promises to resolve
      const response = await Promise.all([userPromise, imagePromise]);

      if (response) {
        dispatch(completeUserProfile(response));
        toast.success("You have successfully updated your profile!");
      }
      // go to dashboard after completing profile
      return router.push("/dashboard");
    } catch (err: any) {
      toast.error(err.response.data.message);
    } finally {
      setSubmitting(false);
    }
  };
  const validateUrl = (url: string) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(url);
  };

  const handleURLChange = (field: string, value: string) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }));
    setIsUrlValid((prev) => ({ ...prev, [field]: validateUrl(value) }));
  };

  const SubmitHandler = async (e: any) => {
    e.preventDefault();

    // building user data and image data
    const userData = {
      ...userInfo,
      name: `${userInfo.firstName} ${userInfo.lastName}`,
    };

    setSubmitting(true);

    try {
      await completeProfileHandler(userData, displayPhoto);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-4 bg-foundation">
      <div className="px-4">
        {currentStep === 1 && (
          <div className="max-w-screen-sm mx-auto pb-10">
            <div className="mx-auto w-max">
              <Image
                src="/apodexLogo.png"
                alt="Logo"
                height={80}
                width={118}
                className="object-cover  w-[89px] lg:w-[158px] mx-auto"
              />
            </div>

            <div className="center relative w-full">
              <h1 className="font-semibold text-2xl lg:text-4xl text-center">
                Set up your Profile
              </h1>
            </div>
            <p className="text-center text-[#8D8D8D] mt-3 lg:mt-5">
              Care to share some personal details with us?
            </p>

            <ActivePage page={currentStep} />

            <div className="w-full center flex-col gap-6">
              <div className="w-full">
                <Input
                  onChange={(e: any) =>
                    handleChange("firstName", e.target.value)
                  }
                  label="First Name"
                  type="text"
                  value={userInfo.firstName}
                  placeholder="John"
                />
              </div>

              <div className="w-full">
                <Input
                  onChange={(e: any) =>
                    handleChange("lastName", e.target.value)
                  }
                  label="Last Name"
                  type="text"
                  value={userInfo.lastName}
                  placeholder="Doe"
                />
              </div>

              <div className="w-full">
                <Input
                  onChange={(e: any) =>
                    handleChange("location", e.target.value)
                  }
                  label="Location"
                  type="text"
                  value={userInfo.location}
                  placeholder="Uyo, Nigeria"
                />
              </div>

              <Button
                validation={
                  !userInfo.firstName ||
                  !userInfo.lastName ||
                  !userInfo.location
                }
                link={nextStep}
                classname="w-full bg-[#0072CE] py-2 px-2 text-white font-medium text-xl text-center rounded"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="max-w-screen-sm mx-auto pb-10">
            <div className="mx-auto w-max">
              <Image
                src="/apodexLogo.png"
                alt="Logo"
                height={80}
                width={118}
                className="object-cover  w-[89px] lg:w-[158px] mx-auto"
              />
            </div>

            <div className="center relative w-full">
              <Image
                src="/back.png"
                alt="back"
                height={80}
                width={18}
                className="absolute left-0 mx-auto cursor-pointer"
                onClick={prevStep}
              />
              <h1 className="font-semibold text-2xl lg:text-4xl text-center">
                Let us know what you do
              </h1>
            </div>
            <p className="text-center text-[#8D8D8D] mt-3 lg:mt-5">
              Give us more details so that we can know you better
            </p>

            <ActivePage page={currentStep} />

            <div className="w-full center flex-col gap-6">
              <div className="w-full">
                <div className="flex flex-col gap-2 relative">
                  <label className="font-medium text-base text-[#817E7E]">
                    Tech Interests
                  </label>
                  <div className="flex flex-wrap py-1 bg-foundation items-center outline-none border-2 border-lightGray focus:outline-none rounded">
                    <div className="flex flex-wrap flex-grow w-full gap-2 pl-2">
                      {userInfo.techInterests.map((interest, index) => (
                        <span
                          key={index}
                          className="flex-initial rounded-lg"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "3px 8px",
                            border: "1px solid #ccc",
                            marginRight: "2px",
                            marginBottom: "2px",
                          }}
                        >
                          {interest}
                          <button
                            onClick={() => removeInterest(interest)}
                            style={{ marginLeft: "10px" }}
                            className="text-[18px] text-red-500"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    {userInfo.techInterests.length < 5 && (
                      <input
                        type="text"
                        value={inputInterest}
                        onChange={handleInterestChange}
                        onKeyDown={handleInterestKeyDown}
                        placeholder="Type an interest and press Enter"
                        className="focus:outline-none min-w-[150px] flex-grow py-2 px-4 bg-foundation"
                      />
                    )}
                  </div>

                  {inputInterest && userInfo.techInterests.length < 5 && (
                    <div
                      className="border-2 border-lightGray -mt-2 cursor-pointer p-2 text-gray-700 rounded-b hover:bg-lightBlue-100 w-full bg-white"
                      onClick={() => addInterest(inputInterest.trim())}
                    >
                      {inputInterest}
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full">
                <Input
                  onChange={(e: any) =>
                    handleChange("currentRole", e.target.value)
                  }
                  label="Current Role (optional)"
                  type="text"
                  value={userInfo.currentRole}
                  placeholder="UX Designer"
                />
              </div>

              <div className="w-full">
                <Input
                  onChange={(e: any) => handleChange("company", e.target.value)}
                  label="Company (optional)"
                  type="text"
                  value={userInfo.company}
                  placeholder="John Doe & Sonsl ltd"
                />
              </div>

              <Button
                link={nextStep}
                validation={!userInfo.techInterests}
                classname="w-full bg-[#0072CE] py-2 px-2 text-white font-medium text-xl text-center rounded"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="max-w-screen-md mx-auto pb-10">
            <div className="mx-auto w-max">
              <Image
                src="/apodexLogo.png"
                alt="Logo"
                height={80}
                width={118}
                className="object-cover  w-[89px] lg:w-[158px] mx-auto"
              />
            </div>

            <div className="center relative w-screen-sm">
              <Image
                src="/back.png"
                alt="back"
                height={80}
                width={18}
                className="absolute left-0 mx-auto cursor-pointer"
                onClick={prevStep}
              />
              <h1 className="font-semibold text-2xl lg:text-4xl text-center">
                Give us a face
              </h1>
            </div>
            <p className="text-center text-[#8D8D8D] mt-3 lg:mt-5">
              Share your best photo and tell us a bit about you
            </p>

            <ActivePage page={currentStep} />

            <div className="w-full center flex-col gap-6">
              <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
                <div className="flex-col h-full gap-3 w-full lg:w-1/2 flex">
                  <FileUpload
                    image={displayPhoto}
                    handleFileChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleImageChange(event)
                    }
                  />
                  <div className="flex items-center gap-1">
                    <img src="/info.png" alt="info" />
                    <p className="text-gray">
                      Make sure your photo is not blurry
                    </p>
                  </div>
                </div>

                <div className="flex-col flex gap-4 w-full lg:w-1/2">
                  <div className="w-full flex-col">
                    <Input
                      onChange={(e: any) =>
                        handleURLChange("portfolioUrl", e.target.value)
                      }
                      label="PortfolioUrl (optional)"
                      type="text"
                      value={userInfo.portfolioUrl}
                      placeholder="Link to your portfolioUrl"
                    />
                    {!isUrlValid.portfolioUrl && (
                      <span className="text-red-500 text-[.7rem]">
                        Invalid URL
                      </span>
                    )}
                  </div>

                  <div className="w-full flex-col">
                    <Input
                      onChange={(e: any) =>
                        handleURLChange("twitterUrl", e.target.value)
                      }
                      label="TwitterUrl (optional)"
                      type="text"
                      value={userInfo.twitterUrl}
                      placeholder="Link to your twitterUrl account"
                    />
                    {!isUrlValid.twitterUrl && (
                      <span className="text-red-500 text-[.7rem]">
                        Invalid URL
                      </span>
                    )}
                  </div>

                  <div className="w-full flex-col">
                    <Input
                      onChange={(e: any) =>
                        handleURLChange("linkedInUrl", e.target.value)
                      }
                      label="LinkedInUrl (optional)"
                      type="text"
                      value={userInfo.linkedInUrl}
                      placeholder="Link to your linkedInUrl account"
                    />
                    {!isUrlValid.linkedInUrl && (
                      <span className="text-red-500 text-[.7rem]">
                        Invalid URL
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full">
                <Input
                  onChange={(e: any) => handleChange("bio", e.target.value)}
                  label="Bio"
                  type="textbox"
                  value={userInfo.bio}
                  placeholder="Tell us something about you"
                />
              </div>

              <Button
                link={SubmitHandler}
                classname="w-full bg-[#0072CE] py-2 px-2 text-white font-medium text-xl text-center rounded"
                cta="Submit"
                loading={status === FETCHING}
              ></Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
