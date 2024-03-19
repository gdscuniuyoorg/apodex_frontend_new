"use client";

import classnames from "@/app/shared/utils/classnames";

export const Button = ({
  link,
  cta,
  loading = false,
  children,
  classname,
  validation,
}: any) => {
  return (
    <button
      onClick={link}
      type="submit"
      className={classnames(
        "p-3 disabled:opacity-50 disabled:cursor-not-allowed",
        classname
      )}
      disabled={loading || validation}
    >
      {loading ? "Please wait..." : cta}
      {children}
    </button>
  );
};

interface InputProps {
  onChange: (e: any) => void;
  classname?: string;
  label?: string;
  name?: string;
  value?: any;
  placeholder?: string;
  type?: string;
}

export const Input = ({
  classname,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: InputProps) => {
  return (
    <div className={classnames("flex flex-col gap-2 ", classname)}>
      {label && <small className="font-medium text-base text-[#817E7E]">{label}</small>}

      <div className="flex items-center input-wrapper outline-none border-2 border-lightGray focus:outline-none bg-transparent rounded">
        <input
          type={type}
          id={label}
          className="focus:outline-none focus:bg-none p-4 bg-foundation w-full"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    </div>
  );
};
