"use client";

import { googleSignUpInitiate } from "@/lib";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const googleLoginHandler = () => {
    const url = googleSignUpInitiate();
    if (router) {
      router.push(`${url}`);
    }
  };
  return (
    <div className="flex items-center justify-center ">
      <button
        className="bg-blue mt-[5rem] text-white rounded-xl py-2 px-3 font-[700]"
        onClick={googleLoginHandler}
      >
        Login with google
      </button>
    </div>
  );
};

export default Login;
