"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "New Movies with API",
    description: "Explore the latest blockbusters fresh from the big screen on our movie website, crafted with Next.js and Tailwind CSS, and powered by the MovieDB API. Immerse yourself in a world of cinema with trailers, reviews, and more.",
    image: "/assets/movies.png",
    repo: "https://github.com/matheusbarb/justmovies",
    demo: "https://justmovies-alpha.vercel.app",
    bgColor: "bg-[#FF6B6B]",
    buttonColor: "bg-[#ff5050]",
  },
  {
    title: "Preview Card",
    description: "A minimalist website crafted with Next.js and Tailwind CSS, showcasing a collection of preview cards inspired by the neo-brutalist design movement. Experience the intersection of art and technology as you explore this experimental study in design.",
    image: "/assets/cardprev.png",
    repo: "https://github.com/matheusbarb/Preview-Card-NextJs",
    demo: "https://preview-card-next-js.vercel.app",
    bgColor: "bg-[#FDFD96]",
    buttonColor: "bg-[#FFDB58]",
  },
  {
    title: "To-do App",
    description: "Todo List app, powered by Next.js, Tailwind CSS, NextAuth, and Firebase. Effortlessly manage tasks, collaborate with ease, and stay organized wherever you go. Experience productivity redefined in just a few clicks.",
    image: "/assets/todo.png",
    repo: "https://github.com/matheusbarb/coolstaks",
    demo: "https://coolstaks.vercel.app",
    bgColor: "bg-[#FCDFFF]",
    buttonColor: "bg-[#C4A1FF]",
  },
  {
    title: "Design App Menu",
    description: "A sleek, responsive website built with Next.js and Tailwind CSS, showcasing the digital menu of our local restaurant. Whether you're browsing on your desktop or on the go with your mobile device, our website adapts effortlessly to provide you with a delightful dining experience.",
    image: "/assets/appdelivery.png",
    repo: "https://github.com/matheusbarb/DesignApp-Hamburgueria",
    demo: "https://design-app-hamburgueria.vercel.app",
    bgColor: "bg-[#FF7A5C]",
    buttonColor: "bg-[#FFA07A]",
  },
  {
    title: "NEW PROJECT COMING SOON",
    description: "New Project Coming soon.",
    image: "/assets/newproj.png",
    repo: "#",
    demo: "#",
    bgColor: "bg-[#DAF5F0]",
    buttonColor: "bg-[#E3DFF2]",
  },
  {
    title: "NEW PROJECT COMING SOON",
    description: "New Project Coming soon.",
    image: "/assets/newproj.png",
    repo: "#",
    demo: "#",
    bgColor: "bg-[#DAF5F0]",
    buttonColor: "bg-[#E3DFF2]",
  }
];

export default function ProjectSection() {
  const [visibleDivs, setVisibleDivs] = useState(3);

  const loadMore = () => {
    setVisibleDivs((prevVisibleDivs) => prevVisibleDivs + 3);
  };

  return (
    <div id="project-section">
      <h1 className="text-center text-5xl mt-10 font-bold mb-5 text-gray-800">
        My Projects
      </h1>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:m-20">
        {projects.slice(0, visibleDivs).map((project, index) => (
          <div
            key={index}
            className={`${project.bgColor} border-4 border-b-8 border-r-8 border-black rounded-t-lg p-8 w-[95vw] lg:w-[30vw] ml-3 lg:ml-0`}
          >
            <Image
              className="rounded-t-lg border-black border-4"
              src={project.image}
              alt="logo"
              layout="responsive"
              width={100}
              height={100}
              priority
            />
            <h1 className="text-2xl flex justify-center font-mono">
              {project.title}
            </h1>
            <span className="flex text-center justify-center mt-2">
              {project.description}
            </span>
            <div className="items-center flex gap-8 justify-center">
              <Link href={project.repo}>
                <button className="mt-10 bg-black">
                  <span className={`${project.buttonColor} block p-4 -translate-x-2 -translate-y-2 border-black border-2 text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all`}>
                    Repository
                  </span>
                </button>
              </Link>
              <Link href={project.demo}>
                <button className="mt-10 bg-black">
                  <span className={`${project.buttonColor} block p-4 -translate-x-2 -translate-y-2 border-black border-2 text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all`}>
                    Live Demo
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visibleDivs < projects.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMore}
            className="bg-black"
          >
            <span className=" bg-[#DAF5F0] block p-4 -translate-x-2 -translate-y-2 border-black border-2 text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all">Load More</span>
          </button>
        </div>
      )}
    </div>
  );
}
