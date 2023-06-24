import Link from "next/link";
import Image from "next/image";
import * as posts from "/data.json";
import AppPagination from "../AppPaging/AppPagination";

export default function Blogpost() {
  return (
    <div className="container mx-auto">
      <h4 className="text-xl p-4">All blog posts</h4>
      <div className="sm:grid gap-2 sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 pt-10 pb-5 border-b border-[1px_solid_rgba(230_230_230_1)]">
        {posts.map((post: any) => (
          <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
            <Link href={`/`}>
              <div className="">
                <Image
                  src={""}
                  alt="Article image art"
                  width={500}
                  height={300}
                  style={{ maxWidth: "100%", height: "auto" }}
                ></Image>
                <div className="p-2 space-y-3">
                  <small className="text-purple-500 cursor-text inline-flex items-center space-x-3">
                    <span className="">Author</span>
                    <span className="rounded-full h-2 w-2 bg-purple-600"></span>
                    <span className="">Date</span>
                  </small>
                  <h3 className="">{post.title}</h3>
                  <p className=" cursor-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere, blanditiis ipsum. Maxime ullam voluptatibus, minus
                    quos fuga sapiente eum est.
                  </p>
                  <ul className="flex items-center space-x-3">
                    <li className="bg-gray-400 rounded-full px-3 py-1">
                      Tag 1
                    </li>
                    <li className="bg-gray-400 rounded-full px-3 py-1">
                      Tag 2
                    </li>
                    <li className="bg-gray-400 rounded-full px-3 py-1">
                      Tag 3
                    </li>
                    <li className="bg-gray-400 rounded-full px-3 py-1">
                      Tag 4
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* PAGINATION */}
      <AppPagination />
    </div>
  );
}
