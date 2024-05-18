/* eslint-disable @next/next/no-img-element */
"use client";

import { useAppDispatch, useAppSelector } from "@/common/hooks";
import ProfileComponent from "@/components/molecules/ProfileComponent";
import { getProfile } from "@/redux/features/profileSlice";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const TalentProfile = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProfile(id as string));
  }, [dispatch]);

  const { data, status } = useAppSelector((state) => state.profile);

  return <ProfileComponent status={status} data={data} myProfile={false} />;
};

export default TalentProfile;
