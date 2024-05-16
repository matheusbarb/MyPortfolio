import Image from "next/image"

export default function Footer (){
    return(
        <div className="border-t-2 border-black flex flex-col lg:flex-row lg:justify-between    items-center">
            <div className="flex justify-center items-center">
                <div className="w-24 h-24 lg:w-36 lg:h-36  xl:ml-56 ">
                    <Image 
                        src="/assets/logo.png"
                        alt="logo"
                        layout="responsive"
                        width={100}
                        height={100}
                        priority
                    />
                </div>
                <a className="text-lg lg:text-xl xl:text-xl md:text-xl text-gray-500 font-medium">
                    Matheus Barbosa<br/>Front-end Developer
                </a>
            </div>
            <a className="lg:mr-56 text-lg text-gray-500 font-medium ">© 2022-2024 Math.Dev</a>
      </div>
    )
}