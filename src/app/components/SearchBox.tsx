"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="mx-2.5">
      <form>
        <div className="search_Input hidden md:flex items-center w-full border border-gray-500 rounded-[20px]">
          <input
            type="text"
            className="block text-gray-900 rounded-tl-[20px] rounded-bl-[20px] text-base p-5 h-12 w-[400px] max-w-3xl bg-white border-none outline-none"
            placeholder="Enter key word"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            type="submit"
            className="flex items-center rounded-br-[20px] rounded-tr-[20px] bg-white p-5 h-12 justify-center cursor-pointer hover:bg-gray-200 border-none outline-none"
          >
            <FaSearch className="text-2xl text-gray-500" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
