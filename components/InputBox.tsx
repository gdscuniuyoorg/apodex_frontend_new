import React, { ChangeEvent, FunctionComponent } from 'react';

interface InputBoxProps {
 label?: string;
 isTextArea?: boolean;
 type: string;
 id: string;
 value: string | number;
 handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
 accept?: string;
}

const InputBox: FunctionComponent<InputBoxProps> = ({
 label,
 isTextArea,
 type,
 id,
 value,
 handleChange,
 accept,
}) => {
 return (
    <div className={`${type !== "file" && "border shadow-inner"} font-work-sans w-full border-black px-4 py-3 rounded-lg shadow-[#4a4a6826] mb-5 flex flex-col`}>
      {label && (
        <label htmlFor={id} className="font-medium text-base">
          {label}
        </label>
      )}
      {isTextArea ? (
        <textarea
          id={id}
          value={value.toString()}
          onChange={handleChange}
          cols={30}
          rows={10}
          style={{ resize: "none" }}
          className="w-full outline-none bg-transparent"
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value.toString()}
          onChange={handleChange}
          accept={accept}
          className={`w-full outline-none bg-transparent ${type === "file" && "hidden"}`}
        />
      )}
    </div>
 );
};

export default InputBox;
