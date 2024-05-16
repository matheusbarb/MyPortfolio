import Image from "next/image";
import Link from "next/link";


export default function ProjectSection() {
  return (
    <div id="project-section"  >
      <h1 className="text-center text-5xl mt-10 font-bold mb-5 text-gray-800  ">
        My Projects
      </h1>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:m-20  ">
        <div className=" bg-[#FF6B6B] border-4 border-b-8 border-r-8 border-black rounded-t-lg p-8 w-[95vw] lg:w-[30vw]  ml-3 lg:ml-0 ">
          <Image
            className=" rounded-t-lg border-black border-4 "
            src="/assets/movies.png"
            alt="logo"
            layout="responsive"
            width={100}
            height={100}
            priority
          />
           <h1 className="text-2xl flex justify-center font-mono">New Movies with API</h1>
          <span className="flex text-center justify-center mt-2">Explore the latest blockbusters fresh from the big screen on our movie website, crafted with Next.js and Tailwind CSS, and powered by the MovieDB API. Immerse yourself in a world of cinema with trailers, reviews, and more. </span>
          <div className="items-center flex gap-8 justify-center">
            <Link href="https://github.com/matheusbarb/justmovies">
            <button className="  mt-10 bg-black ">
              <span className="bg-[#ff5050] block p-4  -translate-x-2 -translate-y-2 border-black border-2  text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all">
                Repository
              </span>
            </button>
            </Link>
            <Link href="https://justmovies-alpha.vercel.app">
            <button className="  mt-10 bg-black ">
              <span className="bg-[#ff5050] block p-4  -translate-x-2 -translate-y-2 border-black border-2  text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all">
                Live Demo
              </span>
            </button>
            </Link>
          </div>
          
        </div>
        <div className=" bg-[#FDFD96] border-4 border-b-8 border-r-8 border-black rounded-t-lg p-8 w-[95vw] lg:w-[30vw]  ml-3 lg:ml-0">
          <Image
            className=" rounded-t-lg border-black border-4"
            src="/assets/cardprev.png"
            alt="logo"
            layout="responsive"
            width={100}
            height={100}
            priority
          />
          <h1 className="text-2xl flex justify-center font-mono">Preview Card</h1>
          <span className="flex text-center justify-center mt-6"> a minimalist website crafted with Next.js and Tailwind CSS, showcasing a collection of preview cards inspired by the neo-brutalist design movement. Experience the intersection of art and technology as you explore this experimental study in design.</span>
          <div className="items-center flex gap-8 justify-center">
            <Link href="https://github.com/matheusbarb/Preview-Card-NextJs">
            <button className="  mt-10 bg-black ">
              <span className="bg-[#FFDB58] block p-4  -translate-x-2 -translate-y-2 border-black border-2  text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all">
                Repository
              </span>
            </button>
            </Link>
            <Link href="https://preview-card-next-js.vercel.app">
            <button className="  mt-10 bg-black ">
              <span className="bg-[#FFDB58] block p-4  -translate-x-2 -translate-y-2 border-black border-2  text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all">
                Live Demo
              </span>
            </button>
            </Link>
          </div>
          
        </div>
        <div className=" bg-[#FCDFFF] border-4 border-b-8 border-r-8 border-black rounded-t-lg p-8 w-[95vw] lg:w-[30vw]  ml-3 lg:ml-0">
          <Image
            className=" rounded-t-lg border-black border-4"
            src="/assets/todo.png"
            alt="logo"
            layout="responsive"
            width={100}
            height={100}
            priority
          />
          <h1 className="text-2xl flex justify-center font-mono">To-do App</h1>
          <span className="flex text-center justify-center mt-6">Todo List app, powered by Next.js, Tailwind CSS, NextAuth, and Firebase. Effortlessly manage tasks, collaborate with ease, and stay organized wherever you go. Experience productivity redefined in just a few clicks. </span>
          <div className="items-center flex gap-8 justify-center">
            <Link href="https://github.com/matheusbarb/coolstaks">
            <button className="  mt-10 bg-black ">
              <span className="bg-[#C4A1FF] block p-4  -translate-x-2 -translate-y-2 border-black border-2  text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all">
                Repository
              </span>
            </button>
            </Link>
            <Link href="https://coolstaks.vercel.app">
            <button className="  mt-10 bg-black ">
              <span className="bg-[#C4A1FF] block p-4  -translate-x-2 -translate-y-2 border-black border-2  text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all">
                Live Demo
              </span>
            </button>
            </Link>
          </div>
        </div>
        <div className=" bg-[#FF7A5C] border-4 border-b-8 border-r-8 border-black rounded-t-lg p-8 w-[95vw] lg:w-[30vw]  ml-3 lg:ml-0">
          <Image
            className=" rounded-t-lg border-black border-4"
            src="/assets/appdelivery.png"
            alt="logo"
            layout="responsive"
            width={100}
            height={100}
            priority
          />
          <h1 className="text-2xl flex justify-center font-mono">Design App Menu</h1>
          <span className="flex text-center justify-center mt-2">a sleek, responsive website built with Next.js and Tailwind CSS, showcasing the digital menu of our local restaurant. <br/>Whether you're browsing on your desktop or on the go with your mobile device, our website adapts effortlessly to provide you with a delightful dining experience. </span>
          <div className="items-center flex gap-8 justify-center">
            <Link href="https://github.com/matheusbarb/DesignApp-Hamburgueria">
            <button className="  mt-10 bg-black ">
              <span className="bg-[#FFA07A] block p-4  -translate-x-2 -translate-y-2 border-black border-2  text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all">
                Repository
              </span>
            </button>
            </Link>
            <Link href="https://design-app-hamburgueria.vercel.app">
            <button className="  mt-10 bg-black ">
              <span className="bg-[#FFA07A] block p-4  -translate-x-2 -translate-y-2 border-black border-2  text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all">
                Live Demo
              </span>
            </button>
            </Link>
          </div>
        </div>
        <div className=" bg-[#DAF5F0] border-4 border-b-8 border-r-8 border-black rounded-t-lg p-8 w-[95vw] lg:w-[30vw]  ml-3 lg:ml-0">
          <Image
            className=" rounded-t-lg border-black border-4"
            src="/assets/newproj.png"
            alt="logo"
            layout="responsive"
            width={100}
            height={100}
            priority
          />
          <h1 className="text-2xl flex justify-center font-mono">NEW PROJECT COMING SOON</h1>
          <span className="flex text-center justify-center mt-24">New Project Coming soon. </span>
          <div className="items-center flex gap-8 justify-center">
            <button className="  mt-10 bg-black ">
              <span className="block items-center bg-[#E3DFF2]  p-4  -translate-x-2 -translate-y-2 border-black border-2  text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all">
              Repository 
              </span>
            </button>

            <button className="  mt-10 bg-black ">
              <span className="bg-[#E3DFF2] block items-center p-4  -translate-x-2 -translate-y-2 border-black border-2  text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all">
              Live Demo
              </span>
            </button>
          </div>
        </div>
        <div className=" bg-[#DAF5F0] border-4 border-b-8 border-r-8 border-black rounded-t-lg p-8 w-[95vw] lg:w-[30vw]  ml-3 lg:ml-0">
          <Image
            className=" rounded-t-lg border-black border-4"
            src="/assets/newproj.png"
            alt="logo"
            layout="responsive"
            width={100}
            height={100}
            priority
          />
          <h1 className="text-2xl flex justify-center font-mono">NEW PROJECT COMING SOON</h1>
          <span className="flex text-center justify-center mt-24">New Project Coming soon. </span>
          <div className="items-center flex gap-8 justify-center">
            <button className="  mt-10 bg-black ">
              <span className="bg-[#E3DFF2] block items-center p-4  -translate-x-2 -translate-y-2 border-black border-2  text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all">
              Repository 
              </span>
            </button>

            <button className="  mt-10 bg-black ">
              <span className="bg-[#E3DFF2] block items-center p-4  -translate-x-2 -translate-y-2 border-black border-2  text-xl hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all">
              Live Demo 
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
