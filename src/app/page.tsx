import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row md:flex-row justify-between items-center lg:items-start mb-10">
      <div className="lg:ml-72 lg:mt-16  lg:mb-0 lg:items-start items-center flex flex-col ">
        <h1 className=" ml-2 text-gray-600 lg:text-lg  font-medium mb-4">
          Hi, my name is Matheus. I'am a
        </h1>
        <span className="lg:text-8xl text-6xl font-extrabold text-gray-900">
          FRONT-END <br /> DEVELOPER
        </span>
        <span className="mt-2 text-center  font-medium text-gray-600">
          {" "}
          Specializes in React, Next.js, Tailwind CSS, and TypeScript.
        </span>
        <span className="flex items-center mt-4 font-extrabold text-gray-800  hover:text-[#7FBC8C] ">
          I'm available for freelance
          <span className="ml-4">
            <FaCheck />
          </span>{" "}
        </span>
        <Link
          href="/assets/curriculum.pdf"
        >
        <button className=" ml-2 mt-10 bg-black ">
          <span className="bg-[#87CEEB] block p-4  -translate-x-2 -translate-y-2 border-black border-2  text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all">
            My Curriculum
          </span>
        </button>
        </Link>
      </div>
      <div className=" flex items-center justify-center mt-12 lg:mt-2 mr-8 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] lg:mr-72 ">
        <Image
          src="/assets/foto.png"
          alt="logo"
          layout="responsive"
          width={100}
          height={100}
          priority
        />
      </div>
    </main>
  );
}
