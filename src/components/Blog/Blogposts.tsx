// "use client";
import React, { useState } from "react";
import posts from "../../../data.json";
import BlogCard from "./BlogCard";
// import Link from "next/link";

export default function Blogpost() {
  // const [articleNumber, setArticleNumber] = useState(8);

  return (
    <div className="container mx-auto">
      <h4 className="text-xl p-4">All blog posts</h4>
      <div className="flex flex-col sm:grid gap-2 sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 pt-10 pb-5 border-b border-[1px_solid_rgba(230_230_230_1)]">
        {posts?.slice(0, 8).map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>

      <div className="flex justify-center items-center py-5">
        <button
          // onClick={() => setArticleNumber(articleNumber + 4)}
          className=" hover:text-blue-400"
        >
          Show more
        </button>
      </div>
    </div>
  );
}
