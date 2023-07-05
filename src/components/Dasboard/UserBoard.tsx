import Image from "next/image";
import Link from "next/link";
import { RiQuillPenFill } from "react-icons/ri";
import React from "react";

export default function UserBoard() {
  return (
    <div className="hidden lg:flex flex-col min-w-[260px] border-r lg:items-start fixed h-full xl:ml-16 p-5">
      <div className="">
        <Image
          src="/image.jpg"
          alt="User Image"
          height={200}
          width={100}
          className="rounded-full"
          style={{ height: "200px", width: "200px" }}
        ></Image>
      </div>

      <div className="mb-3">
        <h2 className="mt-4 font-semibold">User Name</h2>
        <span className="text-sm sm:text-base text-[#757575]">
          10 Subscribers
        </span>
      </div>

      <p className="mb-3 text-[#757575]">User About</p>

      <div className="mb-3 text-[#757575]">
        <Link href="/write-new" className="inline-flex items-center">
          <RiQuillPenFill className="inline-flex items-center mr-1" /> Write{" "}
        </Link>
      </div>
    </div>
  );
}
