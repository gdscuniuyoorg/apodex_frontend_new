"use client";
import React, { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  className: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // Make onClick optional
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick} // Include onClick handler
      className={`${className} get-started flex flex-row gap-3 items-center bg-[#0070CC] rounded-[4px] text-white  p-3`}
    >
      {children}
    </button>
  );
};

export default Button;
