/* eslint-disable @next/next/no-img-element */
"use client";

import classnames from "@/app/shared/utils/classnames";
import { ChangeEvent, useRef, useState } from "react";

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
        "p-3 disabled:opacity-50 py-2 rounded-[4px] bg-blue text-white center gap-2 disabled:cursor-not-allowed",
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
  onKeyDown?: (e: any) => void;
}
export const Select = ({
  options,
  classname,
  label,
  value,
  onChange,
  placeholder,
}: any) => {
  return (
    <div className={classnames("flex flex-col gap-2 ", classname)}>
      {label && (
        <label className="font-medium text-base text-[#817E7E]">{label}</label>
      )}
      <select
        value={value}
        onChange={onChange}
        className="border-2 border-[#BFBEBE] rounded-[4px] !outline-none focus:outline-brand bg-white focus:bg-none p-2 placeholder-[#777373] bg-transparent w-full"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
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
  onKeyDown,
  type = "text",
}: InputProps) => {
  if (type === "textbox") {
    return (
      <div className={classnames("flex flex-col gap-2 ", classname)}>
        {label && (
          <label className="font-medium text-base text-[#817E7E]">
            {label}
          </label>
        )}
        <textarea
          id={label}
          name={label}
          rows={4}
          cols={50}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="border-2 border-[#BFBEBE] rounded-[4px] focus:outline-brand bg-white focus:bg-none p-3 placeholder-[#777373] bg-transparent w-full"
        ></textarea>
      </div>
    );
  }

  return (
    <div className={classnames("flex flex-col gap-2 ", classname)}>
      {label && (
        <small className="font-medium text-base text-[#817E7E]">{label}</small>
      )}

      <div className="flex items-center input-wrapper outline-none border-2 overflow-hidden border-lightGray focus:outline-none bg-transparent rounded-[4px]">
        <input
          type={type}
          id={label}
          onKeyDown={onKeyDown}
          className="focus:outline-none focus:bg-none p-4 py-2 bg-white w-full"
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

export const FileUpload = ({
  image,
  handleFileChange,
  classname,
  imageClassname = "rounded-md",
}: any) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setImagePreview(file);
      handleFileChange(file);
    }
  };

  const clear = () => {
    setImagePreview(null);
    handleFileChange();
  };

  return (
    <div className={classnames("", classname)}>
      <input
        type="file"
        id="fileUpload"
        className=""
        onChange={(e) => onFileChange(e)}
        style={{ display: "none" }}
        ref={fileInputRef}
      />

      {!imagePreview && !image ? (
        <>
          <div
            className="bg-background h-[250px] cursor-pointer flex items-center rounded-[4px] border-lightGray border-2 p-2 text-center justify-center"
            onClick={() => fileInputRef?.current?.click()}
          >
            <img src="/uploadIcon.svg" alt="" />
            <p className="text-blue">Click to upload picture</p>
          </div>
        </>
      ) : imagePreview ? (
        <div className="flex flex-col justify-start items-start">
          <img
            src={URL.createObjectURL(imagePreview)}
            alt="Selected Image"
            className={classnames("object-cover w-full h-52", imageClassname)}
            onClick={() => fileInputRef?.current?.click()}
          />

          <span
            className="p-2 flex gap-2 mt-2 bg-[#B2B3B533] w-auto"
            onClick={clear}
          >
            <p className="text-dark font-light">
              {(imagePreview.name as string) || "file.png"}
            </p>
            <img src="/closeIcon.svg" alt="" className="cursor-pointer" />
          </span>
        </div>
      ) : (
        image && (
          <img
            src={image}
            alt="Image"
            className={classnames("object-cover w-full h-full", imageClassname)}
          />
        )
      )}
    </div>
  );
};
