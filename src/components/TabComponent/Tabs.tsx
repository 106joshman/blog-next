"use client";
import React, { useState } from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      <ul className="flex flex-row space-x-3 items-center border-b shadow-[inset_0_-1px_0_rgba(230_230_230_1)]">
        <li
          className={
            activeTab === "tab1"
              ? "border-b border-gray-900 cursor-pointer px-4 py-2 rounded-t-md bg-[darkgrey]"
              : "px-4 py-2 cursor-pointer"
          }
          onClick={() => setActiveTab("tab1")}
        >
          Home
        </li>
        <li
          className={
            activeTab === "tab2"
              ? "border-b border-gray-900 cursor-pointer px-4 py-2 rounded-t-md bg-[darkgrey]"
              : "px-4 py-2 cursor-pointer"
          }
          onClick={() => setActiveTab("tab2")}
        >
          Lists
        </li>
        <li
          className={
            activeTab === "tab3"
              ? "border-b border-gray-900 cursor-pointer px-4 py-2 rounded-t-md bg-[darkgrey]"
              : "px-4 py-2 cursor-pointer"
          }
          onClick={() => setActiveTab("tab3")}
        >
          About
        </li>
      </ul>

      <div className="outlet">
        {activeTab === "tab1" ? (
          <FirstTab />
        ) : activeTab === "tab2" ? (
          <SecondTab />
        ) : (
          <ThirdTab />
        )}
      </div>
    </div>
  );
}
