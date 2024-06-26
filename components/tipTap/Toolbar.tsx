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
    emit: () => void;
    isActive: boolean;
    icon: JSX.Element;
  };

  const ActionButton = ({ emit, isActive, icon }: ActionButtonProps) => {
    return (
      <button
        type="button"
        onClick={() => emit()}
        className={
          isActive ? "bg-brand text-white p-1 rounded-lg" : "text-black"
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
    editor?.chain().focus().toggleBold().run();
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
    <div className="px-4 py-3  !bg-[#BBD4F0] rounded-t-[4px] flex justify-between items-start gap-5 w-full flex-wrap border-2 border-b-0 border-lightGray">
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap">
        <ActionButton
          emit={toggleBold}
          isActive={editor.isActive('bold')}
          icon={<Bold className="w-5 h-5" />}
        />

        <ActionButton
          emit={toggleUnderline}
          isActive={editor.isActive('underline')}
          icon={<Underline className="w-5 h-5" />}
        />

        <ActionButton
          emit={toggleItalic}
          isActive={editor.isActive('italic')}
          icon={<Italic className="w-5 h-5" />}
        />

        <ActionButton
          emit={toggleList}
          isActive={editor.isActive('bulletList')}
          icon={<List className="w-5 h-5" />}
        />

        <ActionButton
          emit={toggleListOrdered}
          isActive={editor.isActive('orderedList')}
          icon={<ListOrdered className="w-5 h-5" />}
        />

        <ActionButton
          emit={toggleHeading2}
          isActive={editor.isActive('heading', { level: 2 })}
          icon={<Heading2 className="w-5 h-5" />}
        />

        <ActionButton
          emit={toggleStrikethrough}
          isActive={editor.isActive('strike')}
          icon={<Strikethrough className="w-5 h-5" />}
        />

        <ActionButton
          emit={toggleQuote}
          isActive={editor.isActive('blockquote')}
          icon={<Quote className="w-5 h-5" />}
        />

        <ActionButton
          emit={undo}
          isActive={false}
          icon={<Undo className="w-5 h-5" />}
        />

        <ActionButton
          emit={redo}
          isActive={false}
          icon={<Redo className="w-5 h-5" />}
        />

        <ActionButton
          emit={toggleCode}
          isActive={editor.isActive('code')}
          icon={<Code className="w-5 h-5" />}
        />
      </div>
    </div>
  );
};

export default Toolbar;
