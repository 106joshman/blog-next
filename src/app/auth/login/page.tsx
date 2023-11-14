import { Kalam } from "next/font/google";
import Link from "next/link";

// import { FaFacebook, FaTwitter } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
import Form from "./form";
// import { redirect } from "next/navigation";

const kalam = Kalam({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Blaq Blog. - Login",
  description: "Blaq Blog Sign in page",
};

export default async function LoginPage() {
  // const session = await getServerSession();
  // if(session){
  //     // redirect("/");
  // }

  return (
    <section className="relative overflow-hidden h-[100vh]">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]"
        style={{
          backgroundImage: "url('/login_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="container mx-auto h-screen grid place-items-center relative z-[20] px-2 md:px-6 pt-28 pb-24">
          <div className="flex flex-col p-8 rounded-3xl shadow-lg border-t-4 border-emerald-500 w-[80%] md:w-[70%] lg:w-[40%] bg-gradient-to-r from-[rgba(255_255_255_0.2)] to-[rgba(255_255_255_0)] backdrop-blur-[10px]">
            <h2
              className={`${kalam.className} uppercase p-4 items-center mx-auto flex justify-center text-5xl`}
            >
              Login
            </h2>

            <Form />

            <Link href="/auth/register" className="mt-3 text-right">
              Don't have an account? <span className="underline">Sign up</span>
            </Link>

            {/* <!-- Divider --> */}
            {/* <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-[rgba(0_0_0_0.12)] dark:before:border-[rgba(255_255_255_0.12)] after:mt-0.5 after:flex-1 after:border-t after:border-[rgba(0_0_0_0.12)]  dark:after:border-[rgba(255_255_255_0.12)]">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>

            <div className="flex sm:items-center justify-center space-x-3 flex-row ">
              <button
                type="button"
                className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm flex items-center justify-center p-4 text-center dark:focus:ring-[#3b5998]/55"
              >
                <FaFacebook className="w-5 h-5" />
              </button>

              <button
                type="button"
                className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-full text-sm p-4 text-center flex items-center dark:focus:ring-[#1da1f2]/55 justify-center"
              >
                <FaTwitter className="w-5 h-5" />
              </button>

              <button
                type="button"
                className="text-white bg-[#FFF]  focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full text-sm p-4 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 justify-center"
              >
                <FcGoogle className="w-5 h-5" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
