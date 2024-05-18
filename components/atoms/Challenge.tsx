import { IChallenge } from "@/redux/features/challengeSlice";
import Button from "../buttons/Button";
import Lightbulb from "../Icons/Lightbulb";
import Link from "next/link";

const Challenge = ({ challenge }: { challenge: IChallenge }) => {
  return (
    <div className="p-6 mt-5 border border-[#C2C2C44D] rounded-lg sm:w-full md:w-[50vw]  ">
      <Lightbulb />
      <h2 className="text-[#535458] text-[16px] font-bold py-4">
        {challenge.name}
      </h2>
      <p className="text-[#88898C] text-[13px]">
        {`💡 ${challenge.description}`}
      </p>
      <div className="flex lg:flex-row flex-col gap-5 pt-5 items-center">
        <Link
          href={`/dashboard/challenges/terms-and-conditions/${challenge.id}`}
        >
          <Button className="p-3 bg-[#D4DDF4] text-[#0070CC]">
            Register Now
          </Button>
        </Link>

        <p className="text-[#A5A5A8] text-[13px]">
          {` *Registration ends in ${
            challenge.startTime
              ? new Date(challenge.startTime).toDateString()
              : "Soon"
          }*`}
        </p>
      </div>
    </div>
  );
};

export default Challenge;
