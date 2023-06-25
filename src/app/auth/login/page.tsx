"use client";
import PasswordInput from "@/app/components/Password-Input/PasswordInput";
import { Kalam } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";

const kalam = Kalam({
  weight: "400",
  subsets: ["latin"],
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="h-screen">
      <div className="container mx-auto h-full px-6 pt-28 pb-24">
        <div className="flex flex-col h-full items-center mx-auto md:w-[75%] justify-center rounded-3xl bg-slate-400">
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
                  className="min-h-[auto] rounded-md border bg-transparent px-3 py-2 outline-none transition-all duration-200 ease-linear dark:text-neutral-200 shadow-md dark:placeholder:text-neutral-200 w-full"
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
                  className="bg-black text-white px-6 py-2 rounded-md w-full"
                >
                  Login
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
