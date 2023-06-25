"use client";
import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function PasswordInput({ value, onChange, placeholder }: any) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mb-4 relative flex justify-center items-center">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        className="min-h-[auto] rounded-md shadow-md border bg-transparent px-3 py-2 outline-none transition-all duration-200 ease-linear dark:text-neutral-200 dark:placeholder:text-neutral-200 w-full"
        placeholder={placeholder}
      />
      {showPassword === false ? (
        <div
          className="absolute right-2 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          <AiOutlineEyeInvisible className="text-2xl text-gray-500" />
        </div>
      ) : (
        <div
          className="absolute right-2 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          <AiOutlineEye className="text-2xl text-gray-500" />
        </div>
      )}
    </div>
  );
}
