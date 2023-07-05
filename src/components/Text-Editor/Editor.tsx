"use client";
import React, { useState } from "react";
import { Button, Card, Grid, Stack, TextField } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
import EditorTool from "./EditorTool";

export default function Editorbox() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bodyContent, setBodyContent] = useState("");
  
  const handlePublish = (e: any) => {
    e.preventDefault();
    setLoading(true);

    console.log(title, description, bodyContent);
  };
  return (
    <>
      <form
        className="border-[1px_solid_rgba(230_230_230_1)] rounded-md sm:p-6"
        action=""
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <TextField
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Post title"
                />
                <TextField
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  multiline
                  rows={3}
                />
                <div>
                  <EditorTool
                    value={bodyContent}
                    onChange={(value: React.SetStateAction<string>) =>
                      setBodyContent(value)
                    }
                  />
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
                fullWidth
                type="button"
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
