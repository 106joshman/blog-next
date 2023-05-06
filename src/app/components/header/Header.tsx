"use client";
import Link from "next/link";
import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SearchBox from "../Searchbox/SearchBox";
import RegisterPage from "../../auth/register/page";
import DarkModeSwitch from "../DarkMode/DarkModeSwitch";

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
      <header className="flex justify-center items-center py-4 px-4 md:px-6 fixed bg-neutral-300 shadow-md w-full">
        <nav className="container flex items-center select-none justify-between">
          <div className="flex items-center">
            <div className="logo items-center bg-black text-white rounded-lg py-2 px-3 font-bold">
              <Link href="/">Blaq.</Link>
            </div>
            <div className="searchbox ml-2">
              <SearchBox />
            </div>
          </div>

          <div className="navLinks flex items-center">
            <DarkModeSwitch />

            <ul className="authLinks flex txt-black">
              <li>
                <Link
                  href="/auth/login"
                  className="mx-2 hover:bg-neutral-500 py-2 px-3 rounded-lg hover:underline hover:underline-offset-[0.3em]"
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
