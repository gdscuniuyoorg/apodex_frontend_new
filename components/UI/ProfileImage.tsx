import { useAppSelector } from "@/common/hooks";

const ProfileImage = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <img
      className="rounded-full w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] object-cover border"
      src={user?.displayPhoto}
      alt="profile-pic"
    />
  );
};

export default ProfileImage;
