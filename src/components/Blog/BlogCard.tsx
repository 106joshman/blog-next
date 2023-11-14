"use client";

import React from "react";
import Link from "next/link";

export interface Props {
  post: any;
  index: number;
}

export default function BlogCard({ post, index }: Props) {
  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  };
  return (
    <div
      key={index}
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >
      <Link href={`/article/${post.id}`}>
        <img
          className="rounded-t-lg w-[500px] h-[300px]"
          src={post.urlToImage}
          alt="Article image art"
          width={500}
          height={300}
          //   src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
        />

        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {post.title}
          </h5>
          <div className="inline-flex items-center select-none space-x-3 mb-2">
            <span className="font-medium">{post.author}</span>
            <span className="rounded-full h-2 w-2 bg-purple-600"></span>
            <span className="text-sm ">{post.createdAt}</span>
          </div>
          <p className="mb-4 text-base cursor-text text-neutral-600 dark:text-neutral-200">
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

          {/* <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Button
          </button> */}
        </div>
      </Link>
    </div>
    // <div
    //   key={index}
    //   className="cursor-pointer border-b border-gray-400 sm:hover:shadow-slate-400 sm:shadow-md sm:rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200"
    // >
    //   <Link href={`/article/${post.id}`}>
    //     <Image
    //       src={"/image.jpg"}
    //       alt="Article image art"
    //       width={500}
    //       height={300}
    //       style={{
    //         maxWidth: "100%",
    //         height: "auto",
    //         borderTopLeftRadius: "8px",
    //         borderTopRightRadius: "8px",
    //       }}
    //     ></Image>
    //     <div className="p-2 space-y-3">
    //       <small className="text-purple-500 cursor-text inline-flex items-center space-x-3">
    //         <span className="">{post.author}</span>
    //         <span className="rounded-full h-2 w-2 bg-purple-600"></span>
    //         <span className="">{post.createdAt}</span>
    //       </small>
    //       <h3 className="">{post.title}</h3>
    //       <p className=" cursor-text">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
    //         blanditiis ipsum. Maxime ullam voluptatibus, minus quos fuga
    //         sapiente eum est.
    //       </p>

    //       <ul className="flex items-center space-x-3">
    //         {post.tags.map((tag: string, index: number) => (
    //           <li
    //             key={index}
    //             className="bg-gray-300 rounded-full px-3 py-1"
    //             style={{ color: generateRandomColor() }}
    //           >
    //             {tag}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </Link>
    // </div>
  );
}
