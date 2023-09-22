import Link from "next/link";
import React from "react";
import { BiUser, BiLogOutCircle } from "react-icons/bi";
import { PiReadCvLogo } from "react-icons/pi";
import { ImStatsBars2 } from "react-icons/im";

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
            href="/profile"
            className="py-1.5 px-4 flex items-center"
            onClick={() => setShowBar(false)}
          >
            <BiUser className="text-lg mr-1" /> Profile
          </Link>
        </li>

        <li>
          <Link
            href="/"
            className="py-1.5 px-4 flex items-center"
            onClick={() => setShowBar(false)}
          >
            <PiReadCvLogo className="text-lg mr-1" /> Stories
          </Link>
        </li>

        <li>
          <Link
            href="/"
            className="py-1.5 px-4 flex items-center"
            onClick={() => setShowBar(false)}
          >
            <ImStatsBars2 className="text-lg mr-1" /> Stats
          </Link>
        </li>

        <li>
          <Link
            href="/auth/login"
            className="py-1.5 px-4 flex items-center"
            onClick={() => setShowBar(false)}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            href="/auth/register"
            className="py-1.5 px-4 flex items-center"
            onClick={() => setShowBar(false)}
          >
            Sign up
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="py-1.5 px-4 flex items-center"
            onClick={() => setShowBar(false)}
          >
            <BiLogOutCircle className="text-lg mr-1" /> Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
}
