"use client";

import Toolbar from "./Toolbar";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

const Tiptap = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (reason: any) => void;
}) => {
  const handleChange = (text: string) => {
    onChange(text);
  };
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class:
          'flex flex-col px-4 justify-start border-2 !border-lightGray min-h-[20rem] !bg-white text-gray-700 items-start w-full gap-3 font-medium text-[1rem] p-4 rounded-bl-[4px] rounded-br-[4px] outline-none'
      }
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    }
  });

  return (
    <div className="w-full">
      <Toolbar editor={editor} content={value} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default Tiptap;
