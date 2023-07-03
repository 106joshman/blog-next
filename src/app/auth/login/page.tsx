"use client";
import PasswordInput from "@/components/Password-Input/PasswordInput";
import { Kalam } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const kalam = Kalam({
  weight: "400",
  subsets: ["latin"],
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const loginDetails = {
    email: "madmax22@gmail.com",
    password: "Password123456",
  };

  const handleLogin = () => {
    setTimeout(() => {
      if (email === loginDetails.email && password === loginDetails.password) {
        router.push("/profile");
      } else {
        alert("Invalid email or password");
      }
    }, 2000);
  };

  return (
    <section className="">
      <div className="container mx-auto h-screen px-6 pt-28 pb-24">
        <div className="flex flex-col h-full items-center mx-auto md:w-[75%] justify-center p-3 rounded-3xl bg-slate-400">
          <div className="head">
            <div
              className={`${kalam.className} h1 bg-black shadow-lg rounded-full text-white uppercase p-4 h-16 w-16 items-center mx-auto flex justify-center text-5xl`}
            >
              b
            </div>
            <h2 className="text-white text-2xl mt-2 text-center">
              Welcome back!
            </h2>
            <p className="text-gray-700">
              The black bloggers, blogging the right way
            </p>
          </div>

          {/* LOGIN FORM */}
          <div className="w-[90%] sm:w-3/5 lg:w-1/2 mt-10 mx-auto">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-h-[auto] rounded-md border bg-transparent px-3 py-2 outline-none transition-all duration-200 ease-linear placeholder:text-neutral-500 dark:text-neutral-200 shadow-md dark:placeholder:text-neutral-200 w-full"
                  placeholder="Enter Your Email"
                />
              </div>

              <PasswordInput
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                placeholder="Enter your Password"
              />

              <div className="mb-4 flex justify-between text-sm items-center">
                {/* <!-- Remember me checkbox --> */}
                <div className="">
                  <input className="" type="checkbox" value="" />
                  <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
                    Remember me
                  </label>
                </div>

                {/* <!--Forgot password link--> */}
                <Link href="#!">Forgot password?</Link>
              </div>

              <div className="mb-4 justify-center flex">
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="bg-black text-white px-6 py-2 rounded-md w-full"
                >
                  Login
                </button>
              </div>

              {/* <!-- Divider --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              <div className="flex sm:items-center justify-center flex-col sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm flex items-center justify-center p-4 text-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-full text-sm p-4 text-center flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 justify-center"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                    ></path>
                  </svg>
                </button>

                <button
                  type="button"
                  className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full text-sm p-4 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 justify-center"
                >
                  <FcGoogle className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
