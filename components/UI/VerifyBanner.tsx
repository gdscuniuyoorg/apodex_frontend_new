import HomeOutward from "../Icons/HomeOutward";
const VerifyBanner = () => {
  return (
    <div className="flex bg-[#0070CC] items-center justify-between p-2 text-[13px]">
      <p className="lg:px-10 text-[#BECDEF]">
        Your account is not yet verified. Help us to reduce the risk of losing
        your account by verifying your account
      </p>
      <div className="flex items-center lg:px-10">
        <a href="#" className="text-[#E0E0E1]">
          Verify Now
        </a>
        <HomeOutward />
      </div>
    </div>
  );
};

export default VerifyBanner;
