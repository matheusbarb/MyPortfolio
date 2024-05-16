import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Marquee from "@/components/Marquee";
import Header from "@/components/Header";
import Works from "@/components/Works";
import ProjectSection from "@/components/ProjectSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMath ",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Marquee/>
        <Header/>
        {children}
        <Works/>
        <ProjectSection/>
        <Contact/>
        <Footer/>
        </body>
    </html>
  );
}
