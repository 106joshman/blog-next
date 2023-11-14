import Link from "next/link";
import { Kalam } from "next/font/google";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook, FaTwitter } from "react-icons/fa";
import Form from "./form";
// import { redirect } from "next/navigation";

const kalam = Kalam({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Blaq Blog. - Register",
  description: "Blaq Blog Sign up page",
};

export default async function RegisterPage() {
  // const session = await getServerSession();
  // if(session){
  // redirect("/");
  // }
  return (
    <>
      <h2
        className={`${kalam.className} uppercase p-4 items-center mx-auto flex justify-center text-5xl`}
      >
        Sign Up
      </h2>
      <Form />
      <Link href="/auth/login" className="mt-3 text-right">
        Already have an account? <span className="underline">Login</span>
      </Link>
    </>
  );
}
