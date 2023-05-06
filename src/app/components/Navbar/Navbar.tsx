import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center dark:bg-gray-600 text-lg p-4 bg-amber-100 pt-28">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopReated" />
    </div>
  );
}
