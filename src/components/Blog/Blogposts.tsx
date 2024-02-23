"use client";
import { Box, Skeleton } from "@mui/material";
import BlogCard from "./BlogCard";
import { axiosInstance } from "@/utils/axios";
import { useEffect, useState } from "react";

const Card = () => {
  return (
    <Box>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={508}
        height={30}
      />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton animation="wave" width="60%" />
        <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
      </Box>
    </Box>
  );
};

export default function Blogpost() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const res = await axiosInstance("/blogposts");
        setTimeout(() => {
          setIsLoading(false);
        }, 10000);
        setData(res?.data.data);
      } catch (error) {
        console.error("Encounter this", error);

        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  return (
    <div className="container mx-auto">
      <h4 className="text-2xl font-semibold py-5">All blog posts</h4>
      <div className="flex flex-col sm:grid gap-4 sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 pt10 pb-5 border-b border-[1px_solid_rgba(230_230_230_1)]">
        {isLoading ? (
          <>
            {[...Array(6)].map((_, index) => (
              <Card key={index} />
            ))}
          </>
        ) : (
          <>
            {data?.slice(0, 8).map((post: any) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </>
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
