// "use client";
import React, { useState } from "react";
import posts from "../../../data.json";
import BlogCard from "./BlogCard";
import Link from "next/link";

export default function Blogpost() {
  // const [articleNumber, setArticleNumber] = useState(8);

  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  };

  return (
    <div className="container mx-auto">
      <h4 className="text-xl p-4">All blog posts</h4>
      <div className="flex flex-col sm:grid gap-2 sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 pt-10 pb-5 border-b border-[1px_solid_rgba(230_230_230_1)]">
        {posts?.slice(0, 8).map((post, index) => (
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, blanditiis ipsum. Maxime ullam voluptatibus, minus
                  quos fuga sapiente eum est.
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
          // <BlogCard post={post} index={index} />
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

// Fetching data from the JSON file
// import fsPromises from "fs/promises";
// import path from "path";
// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), "data.json");
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);

//   return {
//     posts: objectData,
//   };
// }
