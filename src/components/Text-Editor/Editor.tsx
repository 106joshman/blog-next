"use client";
import React, { useState } from "react";
import {
  Button,
  Card,
  Grid,
  Stack,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import BlogPreview from "../Blog/BlogPreview";
import { Tiptap } from "./Tiptap";
import { useSelector } from "react-redux";
import { useAddNewPostMutation } from "@/redux/apiSlice";
import { useRouter } from "next/navigation";

export default function Editor() {
  const user = useSelector((state: any) => state.persistedReducer.user.user);

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [tags, setTags] = useState<string[]>([]);

  const [content, setContent] = useState("");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();

  const tag = ["Food", "Science", "Animal", "Technology", "Faith"];

  const handleTagChange = (e: any) => {
    const selectedTags =
      typeof e.target.value === "string"
        ? e.target.value.split(",")
        : e.target.value;

    setTags(selectedTags);
  };

  const [addPost, { isLoading, isError }] = useAddNewPostMutation();

  const handlePublish = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const payLoad = {
      title,
      description,
      author: user.name,
      content,
      tags,
    };

    try {
      await addPost(payLoad);

      router.push("/profile");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handlePublish} action="">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                backgroundColor: "inherit",
                border: "none",
                boxShadow: "none",
              }}
            >
              <Stack spacing={3}>
                <div className="">
                  <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="min-h-[auto] rounded-md border bg-transparent px-[14px] py-[16.5px] outline-none transition-all duration-200 ease-linear placeholder:text-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 w-full"
                  />
                </div>

                <div className="">
                  <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    rows={3}
                    className="min-h-[auto] rounded-md border resize-none bg-transparent px-[14px] py-[16.5px] outline-none transition-all duration-200 ease-linear placeholder:text-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 w-full"
                  ></textarea>
                </div>

                <Tiptap description={content} onChange={setContent} />
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Select
                fullWidth
                multiple
                value={tags}
                onChange={handleTagChange}
              >
                {tag?.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              <Button
                fullWidth
                sx={{
                  color: "#FFF",
                  background: "#5C4F44",
                  "&:hover": { backgroundColor: "#5C4F44" },
                }}
                variant="outlined"
                size="large"
                onClick={() => setIsOpen(true)}
              >
                Preview
              </Button>

              <Button
                type="submit"
                fullWidth
                sx={{
                  color: "#FFF",
                  background: "#030202",
                  "&:hover": { backgroundColor: "#030202" },
                }}
                variant="contained"
                size="large"
                onClick={handlePublish}
                disabled={isLoading}
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
        content={content}
        isOpen={isOpen}
        tags={tags}
        isLoading={isLoading}
        onClose={() => setIsOpen(false)}
        onSubmit={handlePublish}
      />
    </>
  );
}
