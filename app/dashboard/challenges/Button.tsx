import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`${className} flex flex-row gap-3 items-center bg-[#0070CC] rounded-[4px] text-white p-3`}
      >
          
      {children}
    </button>
  );
};

export default Button;
