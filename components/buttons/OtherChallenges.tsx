import React, { ReactNode } from "react";

interface OtherChallengesProps {
  children: ReactNode;
  className?: string;
}

const OtherChallenges: React.FC<OtherChallengesProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-between py-5 border-b border-[#C2C2C44D] ${className}`}
    >
      {children}
    </div>
  );
};

export default OtherChallenges;
