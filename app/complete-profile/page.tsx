/* eslint-disable @next/next/no-img-element */
"use client"


import { useState } from "react";
import toast from "react-hot-toast";
import UserService from "@/services/userServices";
import { useAppDispatch } from "@/common/hooks";
import { completeUserProfile } from "@/redux/features/userSlice";
import Image from "next/image";
import { Button, FileUpload, Input } from "@/components/FormComponents";
import ActivePage from "@/components/ProfileSetUp/ActivePage";

interface FormData {
  firstName: string;
  lastName: string;
  location: string;
  techInterests: string;
  currentRole: string;
  company: string;
  profileImage: string;
  portfolio: string;
  twitter: string;
  linkedin: string;
  bio: string;
}

export default function CompleteProfile() {
  const initialFormData: FormData = {
    firstName: "",
    lastName: "",
    location: "",
    techInterests: "",
    currentRole: "",
    company: "",
    profileImage: "",
    portfolio: "",
    twitter: "",
    linkedin: "",
    bio: "",
  };

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isUrlValid, setIsUrlValid] = useState({
    portfolio: true,
    twitter: true,
    linkedin: true,
  });

  const nextStep = () => {
    setCurrentStep((prevStep: number) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep: number) => prevStep - 1);
  };

  const handleChange = (label: any, data: any) => {
    setFormData((prevData) => {
      const newData = {
        ...prevData,
        [label]: data,
      };

      console.log("Form Data", newData);
      return newData;
    });
  };

  const completeProfile = async (data: any) => {
    try {
      const response = await UserService.completeProfile(data);
      // if (response) {
      //     dispatch(completeUserProfile(response.data))
      //     toast.success("You have successfully updated your profile!");
      // }
      return response;
    } catch (err: any) {
      toast.error(err.response.data.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileChange = async (file: File | null, fieldName: string) => {
    const imageUrl = await uploadImage(file);
    setFormData({
      ...formData,
      [fieldName]: imageUrl,
    });
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
    setFormData((prev) => ({ ...prev, [field]: value }));
    setIsUrlValid((prev) => ({ ...prev, [field]: validateUrl(value) }));
  };

  const Submit = async (e: any) => {
    e.preventDefault();

    const formDataToSend: FormData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      location: formData.location,
      techInterests: formData.techInterests,
      currentRole: formData.currentRole,
      company: formData.company,
      profileImage: formData.profileImage,
      portfolio: formData.portfolio,
      twitter: formData.twitter,
      linkedin: formData.linkedin,
      bio: formData.bio,
    };

    setSubmitting(true);

    try {
      await completeProfile(formDataToSend);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-full">
      <div className="px-4">
        {currentStep === 1 && (
          <div className="max-w-screen-sm mx-auto pb-10">
            <div className="mx-auto w-max">
              <Image
                src="/logo.png"
                alt="Logo"
                height={80}
                width={118}
                className="object-cover  w-[218px] mx-auto"
              />
            </div>

            <div className="center relative w-full">
              <h1 className="font-semibold text-4xl text-center">
                Set up your Profile
              </h1>
            </div>
            <p className="text-center text-[#8D8D8D] mt-5">
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
                  value={formData.firstName}
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
                  value={formData.lastName}
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
                  value={formData.location}
                  placeholder="Uyo, Nigeria"
                />
              </div>

              <Button
                validation={
                  !formData.firstName ||
                  !formData.lastName ||
                  !formData.location
                }
                link={nextStep}
                classname="w-full bg-[#0072CE] py-4 px-2 text-white font-medium text-xl text-center rounded"
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
                src="/logo.png"
                alt="Logo"
                height={80}
                width={118}
                className="object-cover  w-[218px] mx-auto"
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
              <h1 className="font-semibold text-4xl text-center">
                Let us know what you do
              </h1>
            </div>
            <p className="text-center text-[#8D8D8D] mt-5">
              Give us more details so that we can know you better
            </p>

            <ActivePage page={currentStep} />

            <div className="w-full center flex-col gap-6">
              <div className="w-full">
                <Input
                  onChange={(e: any) =>
                    handleChange("techInterests", e.target.value)
                  }
                  label="Tech Interests"
                  type="text"
                  value={formData.techInterests}
                  placeholder="UX Designer"
                />
              </div>

              <div className="w-full">
                <Input
                  onChange={(e: any) =>
                    handleChange("currentRole", e.target.value)
                  }
                  label="Current Role (optional)"
                  type="text"
                  value={formData.currentRole}
                  placeholder="UX Designer"
                />
              </div>

              <div className="w-full">
                <Input
                  onChange={(e: any) => handleChange("company", e.target.value)}
                  label="Company (optional)"
                  type="text"
                  value={formData.company}
                  placeholder="John Doe & Sonsl ltd"
                />
              </div>

              <Button
                link={nextStep}
                validation={!formData.techInterests}
                classname="w-full bg-[#0072CE] py-4 px-2 text-white font-medium text-xl text-center rounded"
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
                src="/logo.png"
                alt="Logo"
                height={80}
                width={118}
                className="object-cover  w-[218px] mx-auto"
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
              <h1 className="font-semibold text-4xl text-center">
                Give us a face
              </h1>
            </div>
            <p className="text-center text-[#8D8D8D] mt-5">
              Share your best photo and tell us a bit about you
            </p>

            <ActivePage page={currentStep} />

            <div className="w-full center flex-col gap-6">
              <div className="flex justify-between w-full gap-10">
                <div className="flex-col h-full gap-3 w-1/2 flex">
                  <FileUpload
                    image={formData.profileImage}
                    handleFileChange={(file: File) =>
                      handleFileChange(file, "profileImage")
                    }
                  />
                  <div className="flex items-center gap-1">
                    <img src="/info.png" alt="info" />
                    <p className="text-gray">
                      Make sure your photo is not blurry
                    </p>
                  </div>
                </div>

                <div className="flex-col flex gap-4 w-1/2">
                  <div className="w-full flex-col">
                    <Input
                      onChange={(e: any) =>
                        handleURLChange("portfolio", e.target.value)
                      }
                      label="Portfolio (optional)"
                      type="text"
                      value={formData.portfolio}
                      placeholder="Link to your portfolio"
                    />
                    {!isUrlValid.portfolio && (
                      <span className="text-red-500 text-[.7rem]">Invalid URL</span>
                    )}
                  </div>

                  <div className="w-full flex-col">
                    <Input
                      onChange={(e: any) =>
                        handleURLChange("twitter", e.target.value)
                      }
                      label="Twitter (optional)"
                      type="text"
                      value={formData.twitter}
                      placeholder="Link to your twitter account"
                    />
                    {!isUrlValid.twitter && (
                      <span className="text-red-500 text-[.7rem]">Invalid URL</span>
                    )}
                  </div>

                  <div className="w-full flex-col">
                    <Input
                      onChange={(e: any) =>
                        handleURLChange("linkedin", e.target.value)
                      }
                      label="LinkedIn (optional)"
                      type="text"
                      value={formData.linkedin}
                      placeholder="Link to your linkedin account"
                    />
                    {!isUrlValid.linkedin && (
                      <span className="text-red-500 text-[.7rem]">Invalid URL</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full">
                <Input
                  onChange={(e: any) => handleChange("bio", e.target.value)}
                  label="Bio"
                  type="text"
                  value={formData.bio}
                  placeholder="Tell us something about you"
                />
              </div>

              <Button
                link={Submit}
                classname="w-full bg-[#0072CE] py-4 px-2 text-white font-medium text-xl text-center rounded"
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function uploadImage(file: File | null) {
  throw new Error("Function not implemented.");
}
