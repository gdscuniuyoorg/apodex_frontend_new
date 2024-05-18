import React, { ReactNode } from "react";

interface OtherChallengesProps {
  title: string;
  activity: string;
  link: string;
  className?: string;
}

const OtherChallenges: React.FC<OtherChallengesProps> = ({
  title,
  activity,
  link,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-between py-5 border-b border-[#C2C2C44D] gap-4 ${className}`}
    >
      <p className="text-[13px] text-[#535458]">
        <span className="text-[#131C2D]">{title} </span>
        {activity}
      </p>
      <a href={link} className="text-[#0070CC] text-[16]">
        View
      </a>
    </div>
  );
};

export default OtherChallenges;
