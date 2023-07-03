import Image from "next/image";
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

      <div className="">
        <h2 className="my-4 font-semibold">User Name</h2>
        <span className="mb-3 text-sm sm:text-base text-[#757575]">
          10 Subscribers
        </span>
      </div>

      <p className="my-4 text-[#757575]">User About</p>
    </div>
  );
}
