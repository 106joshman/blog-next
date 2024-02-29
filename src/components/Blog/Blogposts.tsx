"use client";

import { Box, Skeleton } from "@mui/material";
import BlogCard from "./BlogCard";;
import { useGetAllPostsQuery } from "@/redux/apiSlice";

const Card = () => {
  return (
    <Box>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={300}
      />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton animation="wave" width="60%" />
        <Skeleton
          animation="wave"
          variant="text"
          width="80%"
          sx={{ fontSize: "1rem" }}
        />
      </Box>
    </Box>
  );
};

export default function Blogpost() {
  const { data: post, isLoading }: any = useGetAllPostsQuery();

  const response = post?.data;

  return (
    <div className="container mx-auto">
      <h4 className="text-2xl font-semibold py-5">All blog posts</h4>
      <div className="">
        {isLoading ? (
          <div className="flex flex-col sm:grid gap-4 sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 pt10 pb-5 border-[1px_solid_rgba(230_230_230_1)]">
            {[...Array(8)].map((_, index) => (
              <Card key={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col sm:grid gap-4 sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 pt10 pb-5 border-b border-[1px_solid_rgba(230_230_230_1)]">
            {response?.slice(0, 8).map((post: any) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>

      {/* <div className="flex justify-center items-center py-5">
        <button
          // onClick={() => setArticleNumber(articleNumber + 4)}
          className=" hover:text-blue-400"
        >
          Show more
        </button>
      </div> */}
    </div>
  );
}
