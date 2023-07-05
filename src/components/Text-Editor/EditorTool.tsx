import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ align: "center" }, { align: "right" }, { align: "justify" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

export default function EditorTool() {
  const [value, setValue] = useState("");
  return (
    <div>
      <ReactQuill
        value={value}
        placeholder="Write something awesome"
        onChange={setValue}
        theme="snow"
        modules={modules}
      />
    </div>
  );
}
