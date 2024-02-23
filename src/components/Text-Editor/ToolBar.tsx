"use client";

import { type Editor } from "@tiptap/react";
import { MdFormatListBulleted } from "react-icons/md";
import { BsParagraph, BsBlockquoteLeft } from "react-icons/bs";
import { FaListOl } from "react-icons/fa";
import { ImUndo, ImRedo } from "react-icons/im";
import { TextField, MenuItem } from "@mui/material";

type Props = { editor: Editor | null };

export default function ToolBar({ editor }: Props) {
  if (!editor) {
    return null;
  }

  const handleHeadingChange = (level: any) => {
    editor.chain().focus().toggleHeading({ level }).run();
  };

  return (
    <div className="border bg-transparent rounded-t-lg w-full flex flex-wrap space-x-5 dark:text-neutral-200 flexrap-reverse">
      <div className="w-full lg:w-[150px]">
        <TextField
          sx={{
            border: "none",
            outline: "none",
            p: 0.5,
            // width: "150px",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
              outline: "none",
            },
          }}
          fullWidth
          select
          onChange={(e) => handleHeadingChange(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6].map((level) => (
            <MenuItem
              key={level}
              value={level}
              className={
                editor.isActive("heading", { level })
                  ? "text-green-500 font-bold flex p-1 items-center"
                  : "hover:text-green-500 flex p-1 items-center"
              }
            >
              {`Heading ${level}`}
            </MenuItem>
          ))}
          <MenuItem value="">Normal</MenuItem>
        </TextField>
      </div>

      <div className="flex">
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={
              editor.isActive("bold")
                ? "text-green-500 font-bold flex p-1 items-center"
                : "hover:text-green-500 flex p-1 items-center"
            }
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            disabled={!editor.can().chain().focus().toggleUnderline().run()}
            className={
              editor.isActive("underline")
                ? "text-green-500 font-bold flex p-1 items-center"
                : "hover:text-green-500 flex p-1 items-center"
            }
          >
            <strong>
              <u>U</u>
            </strong>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={
              editor.isActive("italic")
                ? "text-green-500 font-bold flex p-1 items-center"
                : "hover:text-green-500 flex p-1 items-center"
            }
          >
            <strong>
              <em>I</em>
            </strong>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={
              editor.isActive("strike")
                ? "text-green-500 font-bold flex p-1 items-center"
                : "hover:text-green-500 flex p-1 items-center"
            }
          >
            <strong>
              <s>S</s>
            </strong>
          </button>
        </div>

        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={
              editor.isActive("paragraph")
                ? "text-green-500 font-bold flex p-1 items-center"
                : "hover:text-green-500 flex p-1 items-center"
            }
          >
            <BsParagraph />
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={
              editor.isActive("bulletList")
                ? "text-green-500 font-bold flex p-1 items-center"
                : "hover:text-green-500 flex p-1 items-center"
            }
          >
            <MdFormatListBulleted />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={
              editor.isActive("orderedList")
                ? "text-green-500 font-bold flex p-1 items-center"
                : "hover:text-green-500 flex p-1 items-center"
            }
          >
            <FaListOl />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={
              editor.isActive("blockquote")
                ? "text-green-500 font-bold flex p-1 items-center"
                : "hover:text-green-500 flex p-1 items-center"
            }
          >
            <BsBlockquoteLeft />
          </button>
        </div>

        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            className={
              editor.isActive("undo")
                ? "text-green-500 font-bold flex p-1 items-center"
                : "text-gray-500 hover:text-green-500 flex p-1 items-center"
            }
          >
            <ImUndo />
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            // disabled={!editor.can().chain().focus().redo().run()}
            className={
              editor.isActive("redo")
                ? "text-green-500 font-bold flex p-1 items-center"
                : "text-gray-500 hover:text-green-500 flex p-1 items-center"
            }
          >
            <ImRedo />
          </button>
        </div>
      </div>
    </div>
  );
}
