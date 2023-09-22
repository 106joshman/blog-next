"use client";
import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Button, Card, Grid, Stack, TextField, Box } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import { styled } from "@mui/material/styles";

const RootStyle = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  // color: theme.palette.grey[400],
  border: `solid 1px ${theme.palette.grey[500]}`,
  "& .ql-container.ql-snow": {
    borderColor: "transparent",
    ...theme.typography.body1,
    // color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily,
  },
  "& .ql-editor": {
    minHeight: 200,
    maxHeight: 640,
    color: theme.palette.grey[100],
    "&.ql-blank::before": {
      fontStyle: "normal",
      color: theme.palette.grey[500],
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

  const handlePublish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);

    console.log(title, description, bodyContent);
  };
  return (
    <>
      <form
        className="border-[1px_solid_rgba(230_230_230_1)] rounded-md sm:p-6"
        onSubmit={handlePublish}
        action=""
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3, backgroundColor: "inherit" }}>
              <Stack spacing={3}>
                <TextField
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Post title"
                />
                <TextField
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  multiline
                  className="placeholder:text-neutral-500 dark:text-neutral-200 shadow-md dark:placeholder:text-neutral-200"
                  rows={3}
                />
                <div>
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
                // onClick={handleOpenPreview}
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
                // onClick={handlePublish}
              >
                Post
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>

      {/* <BlogNewPostPreview
        values={values}
        isOpen={open}
        isValid={isValid}
        isSubmitting={isSubmitting}
        onClose={handleClosePreview}
        onSubmit={handleSubmit(onSubmit)}
      /> */}
    </>
  );
}
