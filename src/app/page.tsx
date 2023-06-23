// import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <div className="h-[4.7rem]"></div>
      <div
        className="relative z-[-1] overflow-hidden bg-no-repeat bg-cover bg-left md:bg-center h-[90vh]"
        style={{
          backgroundImage: "url('/hero_background.jpg')",
          // "url('https://mdbcdn.b-cdn.net/img/new/slides/006.webp')",
          height: "90vh",
        }}
      >
        <div className="grid place-items-center min-h-full p-2">
          <h1 className="text-8xl font-bold">
            Let's <span className="inline-flex text-pink-400">write</span> those
            memories
          </h1>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
