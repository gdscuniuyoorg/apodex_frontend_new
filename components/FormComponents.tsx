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
  postIcon?: any;
  imageClassname?: string;
  buttonClassnames?: any;
  postIconAction?: (e: any) => void;
}

export const Input = ({
  classname,
  label,
  name,
  value,
  onChange,
  placeholder,
  imageClassname,
  buttonClassnames,
  postIcon,
  postIconAction,
  type = "text",
}: InputProps) => {
  if (type === "textbox") {
    return (
      <div className={classnames("flex flex-col gap-2 ", classname)}>
        {label && <label className="block text-sm font-medium">{label}</label>}
        <textarea
          id={label}
          name={label}
          rows={4}
          cols={50}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="border border-[#BFBEBE] rounded-md focus:outline-brand focus:bg-none p-3 placeholder-[#777373] bg-transparent w-full"
        ></textarea>
      </div>
    );
  }

  return (
    <div className={classnames("flex flex-col gap-2 ", classname)}>
      {label && (
        <small className="font-medium text-base text-[#817E7E]">{label}</small>
      )}

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

        {postIcon && (
          <button
            className={classnames("", buttonClassnames)}
            onClick={postIconAction}
          >
            <img
              className={classnames("h-4 w-4 mr-3", imageClassname)}
              src={postIcon}
              alt=""
            />
          </button>
        )}
      </div>
    </div>
  );
};
