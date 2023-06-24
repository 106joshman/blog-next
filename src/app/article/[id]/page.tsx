import Image from "next/image";
import React from "react";

export default function ArticlePage() {

  return (
    <>
      <div className="h-[4.7rem]"></div>

      <div className="p-4 container mx-auto">
        <Image
          src={`/`}
          width={500}
          height={300}
          className="rounded-lg"
          alt="Article poster"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">title</h2>

          <p className="text-lg mb-3">description</p>

          <p className="mb-3">
            <span className="font-semibold mr-1">Related Tags:</span>
            {/* {post.tags?.map((tag: any) => (
              <li
                className="bg-gray-400 rounded-full px-3 py-1"
                // style={{ color: generateRandomColor() }}
              >
                {tag}
              </li>
            ))} */}
          </p>
        </div>
      </div>
    </>
  );
}
