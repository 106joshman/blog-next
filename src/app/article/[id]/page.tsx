"use client";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
// import post from "../../../../data.json";

const getPost = async (id: number) => {
  const res = await fetch(`data.json/${id}`);
  // console.log(res);
  return res.json();
};

export default async function ArticlePage() {
  const params = useParams();

  // console.log(params);
  const iD = Number(params.id);
  const post = await getPost(iD);

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
          <h2 className="text-lg mb-3 font-bold">Title: {post.title}</h2>

          <p className="text-lg mb-3">{post.description}</p>

          <p className="mb-3">
            <span className="font-semibold mr-1">Related Tags:</span>

            <li
              className="bg-gray-400 rounded-full px-3 py-1"
              // style={{ color: generateRandomColor() }}
            >
              {post.tags}
            </li>
          </p>
        </div>
      </div>
    </>
  );
}
