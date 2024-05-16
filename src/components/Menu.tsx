"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare  } from "react-icons/fa";


const links = [
  { id: 1, title: "My Work", url: "project-section" },
  { id: 2, title: "About Me", url: "#about" },
  { id: 3, title: "Social Media", url: "#contact" },
  { id: 4, title: "Contact me", url: "#contact" },
 
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  
  
  return (
    <div className="mr-4 ">
      {!open ? (
        <Image
          src="/assets/open.png"
          alt=""
          width={40}
          height={40}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/assets/close.png"
          alt=""
          width={40}
          height={40}
          onClick={() => setOpen(false)}
        />
      )}

{open && (
    <div className="bg-[#fff6f6] gap-2 mt-2 absolute left-20 rounded-lg top-24 border-black border-2 border-r-8 border-b-8 w-[35vh] h-[40vh-6rem] flex flex-col items-start justify-center text-xl z-10">
        {links.map((item) => (
            <Link className="" href={`#${item.url}`} scroll={true} key={item.id}>
            <span className="font-medium hover:bg-gray-500" onClick={() => setOpen(false)}>
              {item.title}
            </span>
          </Link>
            
        ))}
        
        <div className="flex bottom-10 gap-1 text-4xl hover:text-gray-600">
        <Link href="https://github.com/matheusbarb">
        <span>
          <FaGithub /> 
        
        </span>
        </Link>
        <Link href="https://linkedin.com/in/matheus-barbosa-78b898228/">
        <span><FaLinkedin /></span>
        </Link>
        <Link href="https://wa.me/+5512982312449">
        <span><FaWhatsappSquare /></span>
        </Link>
        </div>
        
        
    </div>
)}
    </div>
  );
};

export default Menu;
