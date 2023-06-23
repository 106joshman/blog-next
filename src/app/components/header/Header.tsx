"use client";
import Link from "next/link";
import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import RegisterPage from "../../auth/register/page";
import DarkModeSwitch from "../DarkMode/DarkModeSwitch";
import { Divide as Hamburger } from "hamburger-react";
import MobileMenu from "./MobileMenu";

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
      <header className="items-center py-4 px-4 md:px-6 fixed bg-neutral-300 shadow-md w-full">
        <nav className="flex items-center select-none justify-between">
          <div className="flex items-center">
            <div className="logo items-center bg-black text-white rounded-lg py-2 px-3 md:text-xl font-bold">
              <Link href="/">Blaq.</Link>
            </div>
          </div>

          <div className="navLinks flex items-center">
            <DarkModeSwitch />

            <div className="mx-2 lg:hidden">
              <Hamburger
                color="black"
                label="Show menu"
                distance="md"
                rounded
                hideOutline={false}
                size={30}
                toggled={showBar}
                toggle={setShowBar}
              />
            </div>

            <ul className="hidden lg:flex text-black">
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
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className="mx-2 rounded-lg"
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
        <RegisterPage
          closeModal={closeModal}
          openModal={openModal}
          isOpen={isOpen}
        />

        {showBar && (
          <MobileMenu
            closeModal={closeModal}
            openModal={openModal}
            isOpen={isOpen}
            showBar={showBar}
            setShowBar={setShowBar}
          />
        )}
      </>
    </>
  );
};

export default Header;