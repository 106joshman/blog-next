"use client";

import { type Editor } from "@tiptap/react";
import { MdFormatListBulleted } from "react-icons/md";
import { BsParagraph, BsBlockquoteLeft } from "react-icons/bs";
import { FaListOl } from "react-icons/fa";
import { ImUndo, ImRedo } from "react-icons/im";

type Props = { editor: Editor | null };

export default function ToolBar({ editor }: Props) {
  if (!editor) {
    return null;
  }

  const HEADINGS = [
    "Heading 1",
    "Heading 2",
    "Heading 3",
    "Heading 4",
    "Heading 5",
    "Heading 6",
  ];

  const handleHeadingChange = (level: any) => {
    editor.chain().focus().toggleHeading({ level }).run();
  };

  return (
    <div className="border bg-transparent rounded-t-lg w-full flex flex-wrap space-x-3 p-2 dark:text-neutral-200">
      <select
        className="border-none outline-none p-1"
        onChange={(e) => handleHeadingChange(Number(e.target.value))}
        defaultValue={""}
      >
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <option
            key={level}
            value={level}
            className={
              editor.isActive("heading", { level })
                ? "text-green-500 font-bold"
                : ""
            }
          >
            {`Heading${level}`}
          </option>
        ))}
        <option value="">Normal</option>
      </select>

      <div className="flex space-x-3">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "text-green-500 font-bold" : ""}
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className={
            editor.isActive("underline") ? "text-green-500 font-bold" : ""
          }
        >
          <strong>
            <u>U</u>
          </strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic") ? "text-green-500 font-bold" : ""
          }
        >
          <strong>
            <em>I</em>
          </strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={
            editor.isActive("strike") ? "text-green-500 font-bold" : ""
          }
        >
          <strong>
            <s>S</s>
          </strong>
        </button>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            editor.isActive("paragraph") ? "text-green-500 font-bold" : ""
          }
        >
          <BsParagraph />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive("bulletList") ? "text-green-500 font-bold" : ""
          }
        >
          <MdFormatListBulleted />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive("orderedList") ? "text-green-500 font-bold" : ""
          }
        >
          <FaListOl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={
            editor.isActive("blockquote") ? "text-green-500 font-bold" : ""
          }
        >
          <BsBlockquoteLeft />
        </button>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <ImUndo />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <ImRedo />
        </button>
      </div>
    </div>
  );
}
