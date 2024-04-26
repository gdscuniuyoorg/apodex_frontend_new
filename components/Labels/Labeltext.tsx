import React, { ReactNode } from "react";

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
  className?: string;
}

const LabelText: React.FC<LabelProps> = ({ htmlFor, children, className }) => {
  return (
    <LabelText
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-medium text-[#88898C] text-[16px]"
    >
      {children}
    </LabelText>
  );
};

export default LabelText;
