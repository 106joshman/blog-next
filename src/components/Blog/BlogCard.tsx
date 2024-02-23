"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

export default function BlogCard({ post }: any) {
  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  };
  return (
    <div
      key={post._id}
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >
      <Link href={`/article/${post._id}`}>
        <Image
          className="sm:rounded-t-lg"
          src={"https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"}
          alt="Article image art is not available"
          width={308}
          height={300}
          placeholder="blur"
          blurDataURL="/Spinners.svg"
          style={{
            maxWidth: "100%",
            height: 300,
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        ></Image>

        <div className="p-4 pb-0">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {post.title}
          </h5>
          <div className="inline-flex items-center select-none space-x-3 mb-2">
            <span className="font-medium">{post.author}</span>
            <span className="rounded-full h-2 w-2 bg-purple-600"></span>
            <span className="text-sm ">
              {moment(post.createdAt).format("DD MMM YYYY")}
            </span>
          </div>
          <p className="text-base cursor-text text-neutral-600 dark:text-neutral-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            blanditiis ipsum. Maxime ullam voluptatibus, minus quos fuga
            sapiente eum est.
          </p>

          <div className="border-t-2 border-neutral-100 px6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            <ul className="flex itemscenter gap-2">
              {post.tags.map((tag: string, index: number) => (
                <li
                  key={index}
                  className="select-none whitespace-nowrap rounded-full px-3.5 py-2 align-baseline font-sans text-xs leading-none"
                  style={{ backgroundColor: generateRandomColor() }}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}
