import Link from "next/link";
import { RiQuillPenFill } from "react-icons/ri";
import React from "react";
import Avatars from "../Avatar";

interface Props {
  userData?: any;
}

export default function UserBoard({ userData }: Props) {
  return (
    <div className="hidden lg:flex flex-col min-w-[260px] border-r lg:items-start fixed h-full xl:ml-16 p-5">
      <div className="">
        <Avatars height={"200px"} width={"200px"} />
      </div>

      <div className="">
        <h2 className="mt-4 font-semibold capitalize">{userData?.name}</h2>
        <span className="text-sm pt-3 sm:text-base text-[#757575] dark:text-slate-200">
          0 Subscribers
        </span>
      </div>

      {/* <p className="mb-3 text-[#757575] dark:text-slate-200">User About</p> */}
      <div className="my-5 w-full border-t border-[#cfcccc]"></div>

      <div className="text-[#757575] dark:text-slate-200">
        <Link href="/write-new" className="inline-flex py-3 items-center">
          <RiQuillPenFill className="inline-flex items-center mr-1" />
          <span className="">Write</span>
        </Link>
      </div>
    </div>
  );
}
