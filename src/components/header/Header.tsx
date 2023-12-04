"use client";
import Link from "next/link";
import React, { useState } from "react";
import DarkModeSwitch from "../DarkMode/DarkModeSwitch";
import { Divide as Hamburger } from "hamburger-react";
import { SlNote } from "react-icons/sl";
import MobileMenu from "./MobileMenu";
import { BiSolidLogOutCircle, BiUser } from "react-icons/bi";
import { Button, Dialog, DialogActions, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Avatars from "../Avatar";
import { Logout } from "../Button";
import { dispatchLogout } from "@/redux/userSlice";
import LogoutModal from "../Modal";

const Header = () => {
  const user = useSelector((state: any) => state.persistedReducer.user.user);

  const token = useSelector((state: any) => state.persistedReducer.user.access_token);

  const [showBar, setShowBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleLogoutPrompt = () => {
    setShow(true);
  };

  const handleLogout = async (e: any) => {
    e.preventDefault();
    try {
      setShow(false);

      dispatch(dispatchLogout());
      router.push("/auth/login");
    } catch (error) {
      console.error("error signing out:", error);
    }
  };

  return (
    <>
      <header className="items-center py-4 px-4 md:px-6 fixed bg-neutral-300 shadow-md w-full z-[50]">
        <nav className="flex items-center select-none justify-between">
          <div className="flex items-center">
            <div className="logo items-center bg-black text-white rounded-lg py-2 px-3 md:text-xl font-bold">
              <Link href="/">Blaq.</Link>
            </div>
          </div>

          <div className="navLinks flex items-center">
            {token && (
              <Link
                href="/write-new"
                className="md:inline-flex mr-3 hidden items-center md:text-lg"
              >
                <SlNote className="inline-flex items-center mr-1" /> Write
              </Link>
            )}

            {/* MODE SWITCH */}
            <DarkModeSwitch />

            {token ? (
              // USER PROFILE */}
              <div
                className="cursor-pointer ml-3"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Avatars height="40px" width="40px" />

                {isOpen && (
                  <ul className="absolute z-[1] top-full right-2 m-0 hidde min-w-max overflow-auto rounded-lg border-none bg-neutral-400 text-left text-base pt-4 pb-2">
                    <li>
                      <Link
                        className="p-3 w-full flex items-center"
                        href="/profile"
                      >
                        <BiUser className="text-lg mr-2" color="white" />

                        <div className="flex flex-col">
                          <span className="capitalize">
                            {user?.name}
                            {/* John Doe */}
                          </span>
                          {/* <span className="text-sm">
                            {/* {session?.user?.email} *
                            example@mail.com
                          </span> */}
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Logout onClick={handleLogoutPrompt} />
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <ul className="hidden ml-3 space-x-3 lg:flex items-center text-black">
                <li>
                  <Link
                    href="/auth/login"
                    className="hover:bg-neutral-500 py-2 px-3 rounded-lg hover:underline hover:underline-offset-[0.3em]"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/register"
                    className="hover:bg-neutral-500 py-2 px-3 rounded-lg hover:underline hover:underline-offset-[0.3em]"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            )}

            <div className="mx-2 lg:hidden dark:text-neutral-200">
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
            <>
              <LogoutModal
                show={show}
                setShow={setShow}
                onClick={handleLogout}
              />
              {/* <Dialog
                open={show}
                onClose={() => setShow(true)}
                aria-labelledby="log out-prompt"
                aria-describedby="logout-dialog-description"
              >
                <Typography
                  variant="subtitle1"
                  align="center"
                  sx={{ p: 2, m: 2 }}
                  paragraph
                >
                  Do you want to log out?
                </Typography>
                <DialogActions
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    type="submit"
                    className="bg-[#2e7d32] px-5 py-2 rounded uppercase min-w-[64px] leading-7 text-[0.9375rem] font-medium transition-colors duration-200 text-white cursor-pointer"
                    onClick={() => setShow(false)}
                  >
                    No
                  </button>
                  <button
                    type="submit"
                    className="bg-[#d32f2f] px-5 py-2 rounded uppercase min-w-[64px] leading-7 text-[0.9375rem] font-medium transition-colors duration-200 text-white cursor-pointer"
                    onClick={handleLogout}
                  >
                    Yes
                  </button>
                </DialogActions>
              </Dialog> */}
            </>
          </div>
        </nav>
      </header>

      <>{showBar && <MobileMenu setShowBar={setShowBar} setShow={setShow} />}</>
    </>
  );
};

export default Header;
