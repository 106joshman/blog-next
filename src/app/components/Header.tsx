"use client";
import Link from "next/link";
import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SearchBox from "./SearchBox";
import RegisterPage from "../auth/register/page";

const Header = () => {
  const [showBar, setShowBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <header className="flex justify-center items-center p-4 fixed w-full">
        <nav className="container flex items-center justify-between">
          <div className="flex items-center">
            <div className="logo items-center bg-black text-white rounded-lg p-2 font-bold">
              <Link href="/">Blaq.</Link>
            </div>
            <SearchBox />
          </div>

          <div className="navLinks flex items-center">
            <ul className="authLinks flex">
              <li>
                <Link
                  href="/auth/login"
                  className="mx-2 hover:bg-neutral-500 p-2 rounded-lg hover:underline hover:underline-offset-[0.3em]"
                >
                  Login
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openModal}
                  className="mx-2 p rounded-lg"
                  // className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                  Sign up
                </button>
                {/* <Link href="/auth/register" className="mx-2 p-2 rounded-lg">Sign up</Link> */}
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <>
        {/* {isOpen && ( */}
          <RegisterPage
            closeModal={closeModal}
            openModal={openModal}
            isOpen={isOpen}
          />
        {/* )} */}
      </>
    </>
  );
};

export default Header;
