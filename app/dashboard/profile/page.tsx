"use client";
import { useAppSelector } from "@/common/hooks";
import ProfileComponent from "@/components/molecules/ProfileComponent";
import dynamic from "next/dynamic";

const Profile = () => {
  const { user, status } = useAppSelector((state: any) => state.auth);

  return (
    <ProfileComponent
      status={status}
      data={user}
      myProfile={false}
    />
  );
};

// export default Profiles
export default dynamic(() => Promise.resolve(Profile), { ssr: false });
