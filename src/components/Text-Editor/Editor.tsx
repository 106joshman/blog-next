"use client";
import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Button, Card, Grid, Stack, Box } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import { styled } from "@mui/material/styles";
import BlogPreview from "../Blog/BlogPreview";

const RootStyle = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px ${theme.palette.grey[500]}`,
  "& .ql-container.ql-snow": {
    borderColor: "transparent",
    ...theme.typography.body1,
    fontFamily: theme.typography.fontFamily,
  },
  "& .ql-editor": {
    minHeight: 200,
    maxHeight: 640,
    "&.ql-blank::before": {
      fontStyle: "normal",
      color: theme.palette.text.disabled,
    },
    "& pre.ql-syntax": {
      ...theme.typography.body2,
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey[900],
    },
  },
}));

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6] }],
    ["bold", "italic", "underline", "strike"],
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

export default function Editor() {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  // const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bodyContent, setBodyContent] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePublish = (e: any) => {
    e.preventDefault();
    // setLoading(true);

    console.log(title, description, bodyContent);
  };
  return (
    <>
      <form onSubmit={handlePublish} action="">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3, backgroundColor: "inherit" }}>
              <Stack spacing={3}>
                <div className="">
                  <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Post title"
                    className="min-h-[auto] rounded-md border bg-transparent px-[14px] py-[16.5px] outline-none transition-all duration-200 ease-linear placeholder:text-neutral-500 dark:text-neutral-200 shadow-md dark:placeholder:text-neutral-200 w-full"
                  />
                </div>

                <div className="">
                  <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    rows={3}
                    className="min-h-[auto] rounded-md border resize-none bg-transparent px-[14px] py-[16.5px] outline-none transition-all duration-200 ease-linear placeholder:text-neutral-500 dark:text-neutral-200 shadow-md dark:placeholder:text-neutral-200 w-full"
                  ></textarea>
                </div>

                <div className="placeholder:text-neutral-500 dark:text-neutral-200 shadow-md dark:placeholder:text-neutral-200 border-[rgba(145_158_171_0.32] rounded-lg font-medium">
                  <RootStyle>
                    <ReactQuill
                      value={bodyContent}
                      placeholder="Write something awesome..."
                      onChange={setBodyContent}
                      theme="snow"
                      modules={modules}
                    />
                  </RootStyle>
                </div>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              <Button
                fullWidth
                color="inherit"
                variant="outlined"
                size="large"
                onClick={() => setIsOpen(true)}
              >
                Preview
              </Button>
              {/* #2e7d32 */}
              <Button
                type="submit"
                fullWidth
                color="success"
                variant="contained"
                size="large"
                onClick={handlePublish}
              >
                Post
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>

      <BlogPreview
        title={title}
        description={description}
        bodyContent={bodyContent}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        // onSubmit={handleSubmit(onSubmit)}
      />
    </>
  );
}
