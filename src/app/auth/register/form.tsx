"use client";
import React, { useState } from "react";
import PasswordInput from "@/components/Password-Input/PasswordInput";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

    return emailRegex.test(email);
  };

  const isStrongPassword = (password: string) => {
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    return passwordRegex.test(password);
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const registerValue = {
      email,
      password,
      fullname: firstName + " " + lastName,
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

    if (firstName === "" || lastName === "") {
      setError("Please enter your name!");
      return;
    }

    console.log(registerValue);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registerValue }),
      });
      if (response.status === 200) {
        console.log(response);
        router.push("/auth/login");
      }
    } catch (error) {
      console.log("error signing in:", error);
    }
  };
  return (
    <form action="">
      <div className="flex flex-row space-x-2 mb-5">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full w-h-[auto] rounded-md border bg-transparent px-3 py-2 outline-none transition-all duration-200 ease-linear dark:text-neutral-200 shadow-md dark:placeholder:text-neutral-200"
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full w-h-[auto] rounded-md border bg-transparent px-3 py-2 outline-none transition-all duration-200 ease-linear dark:text-neutral-200 shadow-md dark:placeholder:text-neutral-200"
          placeholder="Last Name"
        />
      </div>
      <div className="mb-5">
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          className="min-h-[auto] rounded-md border bg-transparent px-3 py-2 outline-none transition-all duration-200 ease-linear dark:text-neutral-200 shadow-md  dark:placeholder:text-neutral-200 w-full"
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
      <div className="">
        <button
          onClick={handleRegister}
          type="submit"
          className="dark:bg-black bg-[darkgrey] px-6 py-2 rounded-md w-full"
        >
          Register
        </button>
      </div>

      <p className="text-[cyan] mt-3 text-sm">{error && error}</p>
    </form>
  );
}
