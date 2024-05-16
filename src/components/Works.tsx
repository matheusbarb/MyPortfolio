import { SiAdobephotoshop, SiAdobeillustrator, SiNextdotjs} from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import Link from "next/link";

export default function works() {
  return (
    <div
      id="#about"
      className="bg-white flex flex-col items-center justify-center"
    >
      <h1 className="lg:text-5xl text-4xl mt-12 font-semibold text-gray-800">
        What I can do for you{" "}
      </h1>
      <div className="flex lg:flex-row flex-col gap-6 mt-10 mb-20 ">
        <div className="lg:w-[430px] w-[38vh] ml-5 h-full lg:ml-0 border-black border-2  hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white hover:-translate-x-4 hover:-translate-y-4 transition-all">
          <span  className="block cursor-pointer">
            <article className="w-full h-full ">
              <div className="px-6 py-5 text-left h-full text-5xl flex gap-4 ">
                <SiAdobephotoshop />{" "}
                <span>
                  {" "}
                  <SiAdobeillustrator />
                </span>
                <span>
                  <IoLogoFigma />
                </span>
              </div>
              <div className="px-6 py-5 text-left h-full">
                <h1 className="text-[32px] mb-4 font-bold">Web Design</h1>
                <span className="lg:text-md text-sm mb-4 font-medium   ">
                  I specialize in creating captivating designs for your website
                  using Photoshop, Illustrator and Figma.
                  <br />
                  <br /> With attention to detail and creativity, I ensure each
                  element enhances the visual appeal and user experience. I
                  craft visually stunning graphics that communicate your brand's
                  identity effectively, I prioritize responsiveness, ensuring
                  your website looks flawless on all devices.
                </span>

                <span className="font-semibold text-sm lg:text-md">
                  <br />
                  <br />
                  Let's collaborate to bring your vision to life and create a
                  standout website in today's competitive digital landscape.
                </span>

                <Link
                  href="https://wa.me/+5512982312449"
                >
                <div className="flex items-center gap-4 font-extrabold text-lg hover:translate-x-4 transition-all mt-4">
                  <span>
                    <FaArrowRightLong />
                  </span>{" "}
                  Let's chat
                </div>
                </Link>
              </div>
            </article>
          </span>
        </div>
        <div className="lg:w-[430px] w-[38vh] ml-5 h-full lg:ml-0 border-black border-2  hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white hover:-translate-x-4 hover:-translate-y-4 transition-all">
          <span  className="block cursor-pointer">
            <article className="w-full h-full ">
              <div className="px-6 py-5 text-left h-full text-5xl flex gap-4 ">
                <SiNextdotjs />{" "}
                <span>
                  {" "}
                  <BiLogoTypescript />
                </span>{" "}
                <span>
                  <RiFirebaseFill />
                </span>
              </div>
              <div className="px-6 py-5 text-left h-full">
                <h1 className="text-[32px] mb-4 font-bold">
                  Develop your Website
                </h1>
                <span className="lg:text-md text-sm mb-4 font-medium ">
                  I specialize in crafting responsive websites tailored to your
                  needs using Next.js, TypeScript, and Firebase. <br />
                  <br />
                  With a focus on modern technologies and best practices, I
                  ensure your website is not only visually appealing but also
                  high-performing and secure. From dynamic web applications to
                  e-commerce platforms, I offer comprehensive solutions to
                  elevate your online presence.
                </span>
                <span className="lg:text-md text-sm mb-4 font-semibold ">
                  <br />
                  <br />
                  Let's collaborate to bring your vision to life and create a
                  standout website that resonates with your audience.
                </span>
                <Link
                  href="https://wa.me/+5512982312449"
                >
                <div className="flex items-center gap-4 font-extrabold text-lg hover:translate-x-4 transition-all mt-8 mb-2">
                  <span>
                    <FaArrowRightLong />
                  </span>{" "}
                  Let's chat
                </div>
                </Link>
              </div>
            </article>
          </span>
        </div>
        <div className="lg:w-[430px] w-[38vh] ml-5 lg:ml-0 h-full border-black border-2  hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white hover:-translate-x-4 hover:-translate-y-4 transition-all">
          <span  className="block cursor-pointer">
            <article className="w-full h-full ">
              <div className="px-6 py-5 text-left h-full text-5xl flex gap-4 ">
                <SiNextdotjs />
                <span>
                  {" "}
                  <BiLogoTypescript />
                </span>{" "}
                <span>
                  {" "}
                  <RiTailwindCssFill />
                </span>
              </div>
              <div className="px-6 py-5 text-left h-full">
                <h1 className="text-[32px] mb-4 font-bold">
                  Costumize your site
                </h1>
                <span className="lg:text-md text-sm mb-4 font-medium   ">
                  I specialize in enhancing and customizing your website using
                  best practices in Next.js and Tailwind CSS.
                  <br /> <br /> With expertise in modern frontend development
                  techniques, I ensure your site is optimized for performance,
                  accessibility, and responsiveness. From fine-tuning UI
                  components to implementing seamless navigation, I offer
                  tailored solutions to elevate your online presence.
                </span>
                <span className="lg:text-md text-sm mb-4 font-semibold  ">
                  <br />
                  <br />
                  Let's work together to refine your website and create a user
                  experience that exceeds expectations.
                </span>
                <Link
                  href="https://wa.me/+5512982312449"
                >
                <div className="flex items-center gap-4 font-extrabold text-lg hover:translate-x-4 transition-all mt-8 mb-2">
                  <span>
                    <FaArrowRightLong />
                  </span>{" "}
                  Let's chat
                </div>
                </Link>
              </div>
            </article>
          </span>
        </div>
      </div>
    </div>
  );
}
