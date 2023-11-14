// import Link from "next/link";
import Blogpost from "@/components/Blog/Blogposts";

export const metadata = {
  title: "The Blaq Blog. - Home",
  description: "Blaq Bloq homepage",
  keywords:
    "Web development, Next js, blaq dev, Blog, Blogger, Blogging, content writing",
};
export default function HomePage() {
  return (
    <div className="">
      <div className="h-[4.7rem]"></div>
      <div
        className="relative z-[-1] overflow-hidden bg-no-repeat bg-cover bg-left md:bg-center h-[90vh]"
        style={{
          backgroundImage: "url('/hero_background.jpg')",
          height: "90vh",
        }}
      >
        <div className="grid place-items-center min-h-full p-2">
          <h1 className="text-8xl font-bold">
            Let&apos;s <span className="inline-flex text-pink-400">write</span>{" "}
            those memories
          </h1>
        </div>
      </div>
      <section className="bg-white bg-opacity-80 p-2">
        <Blogpost />
      </section>
    </div>
  );
}
