import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  // const isLogged = useSelector(
  //   (state: any) => state.persistedReducer.user.isLogged
  // );

  // const router = useRouter();

  // console.log(isLogged);

  // if (isLogged === true) {
  //   router.push("/profile");
  // }

  return (
    <div className="relative h-screen">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]"
        style={{
          backgroundImage: "url('/register_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="container mx-auto h-screen grid place-items-center relative z-[20] px-2 md:px-6 pt-28 pb-24">
          <div className="flex flex-col p-8 shadow-lg border-t-4 border-emerald-500 rounded-3xl w-[80%] md:w-[70%] lg:w-[40%] bg-gradient-to-r from-[rgba(255_255_255_0.2)] to-[rgba(255_255_255_0)] backdrop-blur-[10px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
