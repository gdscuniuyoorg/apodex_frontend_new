import React, { ReactNode } from "react";

interface RecentChallengesProps {
  children: ReactNode;
  className?: string; // Make className prop optional with the '?' symbol
}

const RecentChallenges: React.FC<RecentChallengesProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`${className} flex justify-between items-center text-[16px] py-3 px-2 rounded-lg bg-[#D7EFDE] text-[#535458]`}
    >
      {children}
    </div>
  );
};

export default RecentChallenges;

