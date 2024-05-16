import Marquee from "react-fast-marquee";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function autoscroll() {

    return (
        <Link href={"https://github.com/matheusbarb"}>
              <div className="overflow-x-hidden">
        <Marquee className="bg-[#FFDB58] text-sm hover:cursor-pointer  ">
             <p className="flex items-center pt-1 pb-1 font-mono border-b-2 border-t-2 border-black ">Follow me on Github| <FaGithub /> | Follow me on Github| <FaGithub /> | Follow me on Github| <FaGithub /> | Follow me on Github| <FaGithub /> | Follow me on Github| <FaGithub /> | Follow me on Github| <FaGithub /> | Follow me on Github| <FaGithub /> | Follow me on Github| <FaGithub /> | Follow me on Github| <FaGithub /> | Follow me on Github| <FaGithub /> | Follow me on Github| <FaGithub /> | Follow me on Github| <FaGithub /> |
             </p>
        </Marquee>
        </div>
        </Link>
    )
}
   
