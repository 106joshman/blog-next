import Header from "@/components/header/Header";
import ThemeProvider from "./Provider/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "./Provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Blaq Blog.",
  description: "Blogging the right way",
  keywords: "Web development, Blog, Blogger, Blogging, content writing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            <Header />
            <main className="">{children}</main>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
