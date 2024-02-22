"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Underline from "@tiptap/extension-underline";
import Blockquote from "@tiptap/extension-blockquote";
import Heading from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";

export const Tiptap = ({ description, onChange }: any) => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Blockquote,
      Underline,
      StarterKit.configure({}),
      Heading.configure({
        HTMLAttributes: {
          class: "",
        },
        levels: [1, 2, 3, 4, 5, 6],
      }),
      Link.configure({
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: null,
        },
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class:
          "rounded-b-lg border border-t-0 bg-transparent outline-none transition-all duration-200 ease-linear p-3 placeholder:text-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 w-full min-h-[250px] overflow-y-scroll",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });
  return (
    <div className="flex flex-col min-h-[250px]">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

// rounded-md border bg-transparent px-[14px] py-[16.5px] outline-none transition-all duration-200 ease-linear placeholder:text-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 w-full
