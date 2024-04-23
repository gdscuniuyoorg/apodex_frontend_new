// import React, { ChangeEvent, FunctionComponent } from "react";

// interface InputBoxProps {
//   isTextArea?: boolean;
//   type: string;
//   id: string;
//   name: string;
//   value: string | number;
//   handleChange: (
//     event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => void;
//   placeholder?: string;
//   accept?: string;

// }

// const InputBox: FunctionComponent<InputBoxProps> = ({
//   isTextArea,
//   type,
//   id,
//   name,

//   value,
//   handleChange,
//   placeholder,
//   accept,
// }) => {
//   return (
//     <div
//       className={`${
//         type !== "file" && "border-2"
//       } font-work-sans w-full border-lightGray px-4 py-3 rounded shadow-[#4a4a6826] mb-5 mt-1 flex flex-col`}
//     >
//       {isTextArea ? (
//         <textarea
//           id={id}
//           value={value.toString()}
//           onChange={handleChange}
//           cols={30}
//           rows={10}
//           style={{ resize: "none" }}
//           className="w-full outline-none bg-foundation"
//         />
//       ) : (
//         <input
//           type={type}
//           id={id}
//           name={name}
//           value={value.toString()}
//           onChange={handleChange}
//           accept={accept}
//           placeholder={placeholder}
//           className={`w-full outline-none bg-foundation ${
//             type === "file" && "hidden"
//           }`}
//         />
//       )}
//     </div>
//   );
// };

// export default InputBox;

import React, { ChangeEvent, FunctionComponent } from "react";

interface InputBoxProps {
  isTextArea?: boolean;
  type: string;
  id: string;
  name: string;
  value: string | number;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  accept?: string;
}

const InputBox: FunctionComponent<InputBoxProps> = ({
  isTextArea,
  type,
  id,
  name,
  value,
  handleChange,
  placeholder,
  accept,
}) => {
  return (
    <div
      className={`${
        type !== "file" && "border-2"
      } font-work-sans w-full border-lightGray px-4 py-3 rounded shadow-[#4a4a6826] mb-5 mt-1 flex flex-col`}
    >
      {isTextArea ? (
        <textarea
          id={id}
          value={value.toString()}
          onChange={handleChange}
          cols={30}
          rows={10}
          style={{ resize: "none" }}
          className="w-full outline-none bg-foundation"
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value} // Change here
          onChange={handleChange}
          accept={accept}
          placeholder={placeholder}
          className={`w-full outline-none bg-transparent ${
            type === "file" && "hidden"
          }`}
        />
      )}
    </div>
  );
};

export default InputBox;
