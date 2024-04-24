/* eslint-disable @next/next/no-img-element */
"use client";

import classnames from "@/app/shared/utils/classnames";
import { useRef, useState } from "react";

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
        "p-3 disabled:opacity-50 bg-blue text-white center gap-2 disabled:cursor-not-allowed",
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
          onKeyDown={onKeyDown}
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

export const FileUpload = ({
  image,
  handleFileChange,
  classname,
  imageClassname = "rounded-md",
}: any) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [imagePreview, setImagePreview] = useState<any>(null);

  const onFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setImagePreview(selectedFile);
    handleFileChange(selectedFile);
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
            className="bg-background h-[250px] cursor-pointer flex items-center rounded-md border-lightGray border p-2 text-center justify-center"
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
