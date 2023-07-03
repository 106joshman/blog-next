import Header from "@/components/header/Header";
import Provider from "./Provider/Provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Blaq Blog.",
  description: "Blogging the right way",
  keywords:
    "Web development, Next js, blaq dev, Blog, Blogger, Blogging, content writing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <main className="">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
