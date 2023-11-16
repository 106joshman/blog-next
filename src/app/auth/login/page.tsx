import { Kalam } from "next/font/google";
import Link from "next/link";
// import { FaFacebook, FaTwitter } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
import Form from "./LoginForm";
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
    <>
      <h2
        className={`${kalam.className} uppercase p-4 items-center mx-auto flex justify-center text-5xl`}
      >
        Login
      </h2>

      {/* <Form /> */}
      <Form />

      <Link href="/auth/register" className="mt-3 text-right">
        {`Don't have an account?`} <span className="underline">Sign up</span>
      </Link>
    </>
  );
}
