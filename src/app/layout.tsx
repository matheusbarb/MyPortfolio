import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Marquee from "@/components/Marquee";
import Header from "@/components/Header";
import Works from "@/components/Works";
import ProjectSection from "@/components/ProjectSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeInSection from '../components/FadeInSection';



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
        <FadeInSection>
        {children}
        </FadeInSection>
        <FadeInSection>
        <Works/>
        </FadeInSection>
        <FadeInSection>
        <ProjectSection/>
        </FadeInSection>
        <FadeInSection>
        <Contact/>
        </FadeInSection>
        <Footer/>
        </body>
    </html>
  );
}
