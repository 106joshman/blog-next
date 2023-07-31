import Link from "next/link";
import React from "react";

export default function MobileMenu({
  closeModal,
  openModal,
  isOpen,
  showBar,
  setShowBar,
}: any) {
  return (
    <div className="border border-[1px_solid_rgba(230_230_230_1)] rounded-md shadow-lg text-red-500 p-4 h-screen w-full z-10 fixed top-20 left-0 bg-white transition duration-150 ease-in-out">
      <ul className="text-start text-[#757575] text-sm space-y-3">
        <li>
          <Link
            href="/write-new"
            className="py-1.5 px-4"
            onClick={() => setShowBar(false)}
          >
            Write
          </Link>
        </li>
        <li>
          <Link
            href="/auth/login"
            className="py-1.5 px-4"
            onClick={() => setShowBar(false)}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            href="/auth/register"
            className="py-1.5 px-4"
            onClick={() => setShowBar(false)}
          >
            Sign up
          </Link>
        </li>
      </ul>
    </div>
  );
}
