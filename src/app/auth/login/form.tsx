"use client";
import React, { useState } from "react";
import PasswordInput from "@/components/Password-Input/PasswordInput";
import { useRouter } from "next/navigation";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState<boolean>(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

    return emailRegex.test(email);
  };

  const isStrongPassword = (password: string) => {
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    return passwordRegex.test(password);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const loginValue = {
      email,
      password,
      remember,
    };

    if (!isValidEmail(email)) {
      setError("Email is Invalid");
      return;
    }

    if (!isStrongPassword(password) || password.length < 8) {
      setError(
        "Password must contain 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
      );
      return;
    }

    console.log(loginValue);
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        body: JSON.stringify({ loginValue }),
      });
      // if()
      if (response.status === 200) {
        console.log(response);
        router.push("/profile");
        router.refresh();
      }
    } catch (error) {
      console.log("error signing in:", error);
    }
    // setTimeout(() => {
    //   if (email === loginDetails.email && password === loginDetails.password) {
    //     router.push("/profile");
    //   } else {
    //     alert("Invalid email or password");
    //   }
    // }, 5000);
  };
  return (
    <form action="">
      <div className="mb-5">
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          className="min-h-[auto] rounded-md border bg-transparent px-3 py-2 outline-none transition-all duration-200 ease-linear text-black text-lg dark:text-neutral-200 shadow-md dark:placeholder:text-neutral-200 w-full"
          placeholder="Enter Your Email"
        />
      </div>

      <PasswordInput
        value={password}
        onChange={(e: any) => {
          setPassword(e.target.value);
          setError("");
        }}
        placeholder="Enter your Password"
      />

      <div className="mb-4 flex justify-between text-sm items-center">
        {/* <!-- Remember me checkbox --> */}
        <div className="inline-flex">
          <input
            className="w-5 h-5 rounded "
            type="checkbox"
            onChange={() => setRemember(!remember)}
          />
          <label className="inline-block ml-1.5 hover:cursor-pointer">
            Remember me
          </label>
        </div>

        {/* <!--Forgot password link--> */}
        {/* <Link href="#!">Forgot password?</Link> */}
      </div>

      <div className="justify-center flex">
        <button
          type="button"
          onClick={handleLogin}
          className="dark:bg-black bg-[darkgrey] px-6 py-2 rounded-md w-full"
        >
          Login
        </button>
      </div>

      <p className="text-[cyan] mt-3 text-sm">{error && error}</p>
    </form>
  );
}