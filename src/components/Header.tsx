"use client";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  return (
    <div  className="flex justify-between  xl:ml-64   items-center">
      <div className="flex justify-center items-center">
        <div className="w-24 h-24 lg:w-36 lg:h-36">
          <Image
            src="/assets/logo.png"
            alt="logo"
            layout="responsive"
            width={100}
            height={100}
            priority
          />
        </div>
        <Link href="https://linkedin.com/in/matheus-barbosa-78b898228/">
        <span className="text-lg lg:text-2xl xl:text-2xl md:text-2xl font-medium text-gray-700 hover:text-gray-900 ">Math.Dev</span>
        </Link>
      </div>
      <div className="h-12  flex items-center justify-between   md:h-24 lg:px-20 xl:px-40">
        {/*LINKS DA ESQUERDA*/}
        <div className="hidden md:flex gap-6 flex-1 text-lg mr-48 font-medium">
          <ScrollLink
            to="project-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p className="hover:cursor-pointer hover:translate-x-2 hover:-translate-y-2 transition-all">
              {" "}
              My Work
            </p>
          </ScrollLink>
          <ScrollLink
            to="#about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p className="hover:cursor-pointer hover:translate-x-2 hover:-translate-y-2 transition-all">
              {" "}
              About Me
            </p>
          </ScrollLink>
          <ScrollLink
            to="#contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p className="hover:cursor-pointer hover:translate-x-2 hover:-translate-y-2 transition-all">
              {" "}
              Social Media
            </p>
          </ScrollLink>
          <ScrollLink
            to="#contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p className="hover:cursor-pointer hover:translate-x-2 hover:-translate-y-2 transition-all">
              {" "}
              Contact me
            </p>
          </ScrollLink>
        </div>
        {/*MOBILE MENU*/}
        <div className="md:hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
}
