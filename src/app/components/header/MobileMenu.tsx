import Link from "next/link";
import React from "react";

// export interface Information

export default function MobileMenu({
  closeModal,
  openModal,
  isOpen,
  showBar,
  setShowBar,
}: any) {
  return (
    <div className="text-red-500 p-4 h-screen z-10 fixed top-20 left-0 bg-green-500 transition duration-150 ease-in-out">
      <ul className="">
        <li>
          <Link
            href="/auth/login"
            className="mx-2 hover:bg-neutral-500 py-2 px-3 rounded-lg hover:underline hover:underline-offset-[0.3em]"
          >
            Login
          </Link>
        </li>
        <li>
          <button type="button" onClick={openModal} className="mx-2 rounded-lg">
            Sign up
          </button>
          {/* <Link href="/auth/register" className="mx-2 p-2 rounded-lg">Sign up</Link> */}
        </li>
      </ul>
    </div>
  );
}
