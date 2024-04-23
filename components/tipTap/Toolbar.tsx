import { Editor } from "@tiptap/react";
import {
  Bold,
  Underline,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Strikethrough,
  Quote,
  Undo,
  Redo,
  Code,
} from "lucide-react";

type ToolbarProps = {
  editor: Editor | null;
  content: string;
};

const Toolbar = ({ editor, content }: ToolbarProps) => {
  type ActionButtonProps = {
    editor: Editor | null;
    emit: (editor: Editor | null) => void;
    isActive: boolean;
    icon: JSX.Element;
  };

  const ActionButton = ({
    editor,
    emit,
    isActive,
    icon,
  }: ActionButtonProps) => {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          emit(editor);
        }}
        className={
          isActive ? "bg-sky-700 text-white p-2 rounded-lg" : "text-sky-400"
        }
      >
        {icon}
      </button>
    );
  };

  if (!editor) {
    return null;
  }
  const toggleBold = () => {
    editor.chain().focus().toggleBold().run();
  };

  const toggleUnderline = () => {
    editor.chain().focus().toggleUnderline().run();
  };

  const toggleItalic = () => {
    editor.chain().focus().toggleItalic().run();
  };

  const toggleList = () => {
    editor.chain().focus().toggleBulletList().run();
  };

  const toggleListOrdered = () => {
    editor.chain().focus().toggleOrderedList().run();
  };

  const toggleHeading2 = () => {
    editor.chain().focus().toggleHeading({ level: 2 }).run();
  };

  const toggleStrikethrough = () => {
    editor.chain().focus().toggleStrike().run();
  };

  const toggleQuote = () => {
    editor.chain().focus().toggleBlockquote().run();
  };

  const undo = () => {
    editor.chain().focus().undo().run();
  };

  const redo = () => {
    editor.chain().focus().redo().run();
  };

  const toggleCode = () => {
    editor.chain().focus().toggleCode().run();
  };

  return (
    <div className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start gap-5 w-full flex-wrap border border-gray-700">
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap">
        <ActionButton
          editor={editor}
          emit={toggleBold}
          isActive={editor.isActive("bold")}
          icon={<Bold className="w-5 h-5" />}
        />

        <ActionButton
          editor={editor}
          emit={toggleUnderline}
          isActive={editor.isActive("underline")}
          icon={<Underline className="w-5 h-5" />}
        />

        <ActionButton
          editor={editor}
          emit={toggleItalic}
          isActive={editor.isActive("italic")}
          icon={<Italic className="w-5 h-5" />}
        />

        <ActionButton
          editor={editor}
          emit={toggleList}
          isActive={editor.isActive("bulletList")}
          icon={<List className="w-5 h-5" />}
        />

        <ActionButton
          editor={editor}
          emit={toggleListOrdered}
          isActive={editor.isActive("orderedList")}
          icon={<ListOrdered className="w-5 h-5" />}
        />

        <ActionButton
          editor={editor}
          emit={toggleHeading2}
          isActive={editor.isActive("heading", { level: 2 })}
          icon={<Heading2 className="w-5 h-5" />}
        />

        <ActionButton
          editor={editor}
          emit={toggleStrikethrough}
          isActive={editor.isActive("strike")}
          icon={<Strikethrough className="w-5 h-5" />}
        />

        <ActionButton
          editor={editor}
          emit={toggleQuote}
          isActive={editor.isActive("blockquote")}
          icon={<Quote className="w-5 h-5" />}
        />

        <ActionButton
          editor={editor}
          emit={undo}
          isActive={false}
          icon={<Undo className="w-5 h-5" />}
        />

        <ActionButton
          editor={editor}
          emit={redo}
          isActive={false}
          icon={<Redo className="w-5 h-5" />}
        />

        <ActionButton
          editor={editor}
          emit={toggleCode}
          isActive={editor.isActive("code")}
          icon={<Code className="w-5 h-5" />}
        />
      </div>
    </div>
  );
};

export default Toolbar;
