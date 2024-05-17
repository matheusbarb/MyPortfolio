"use client"
import Link from "next/link"
import { useRef, } from "react";
import { FaGithub, FaLinkedin, FaWhatsappSquare  } from "react-icons/fa";
import emailjs from "@emailjs/browser";





export default function contact() {
    const form = useRef<HTMLFormElement>(null);
    

    function sendEmail(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if (!form.current) {
            console.log('Formulário não encontrado.');
            return;
        }

        const formData = new FormData(form.current);
            const name = formData.get('name') as string;
             const email = formData.get('email') as string;
             const message = formData.get('message') as string;

             if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
      

        if (form.current) {
            emailjs
              .sendForm('service_gvtjx2a', 'template_k967i69', form.current, {
                publicKey: 'dDvcmR75JfSM-JPcQ',
              })
              .then(
                () => {
                  console.log('SUCCESS!');
                  form.current?.reset();
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
              );
        } else {
            console.log('Form element is null');
        }
    };
    
    return (
        <div id="#contact" className="flex flex-col lg:flex-row justify-around m-24">
            <div>
                <h5 className="lg:text-6xl text-4xl font-bold text-gray-800 my-2">Contact</h5>
                <p className="text-gray-800 mb-20 max-w-md mt-10 font-medium ">
                Any project starts with goal setting. If you have a vision, I can design it.<br/><br/>
                    I'm always looking for new opportunities, get in touch with me and let's talk!
                </p>
                <span className=" text-gray-500 font-semibold">E-mail me at <br/></span>
                <span className="font-bold hover:text-gray-600 lg:text-base text-sm">matheusbarbosacontato00@gmail</span>

                <div className="mt-20 font-medium text-gray-500"><span>Follow me!</span></div>
                <div className="flex items-center gap-2 mt-2 mb-10 ">
                    
                    <Link href="https://github.com/matheusbarb">
                        <span className="text-5xl hover:text-gray-700"><FaGithub /></span>
                    </Link>
                    <Link href="https://linkedin.com/in/matheus-barbosa-78b898228/">
                        <span className="text-5xl hover:text-gray-700"><FaLinkedin /></span>
                    </Link>
                    <Link href="https://wa.me/+5512982312449">
                        <span className="text-5xl hover:text-gray-700"><FaWhatsappSquare /></span>
                    </Link>
                </div>
                </div>
                <div>
                <h5 className="lg:text-6xl text-lg font-bold text-gray-800 my-2 pb-10">Send me a E-mail</h5>
                <form ref={form} className="form flex flex-col gap-4 border-black border-2 rounded-b-xl bg-[#9CA2A9]  rounded-t-xl" onSubmit={sendEmail}>
                <input className="  block -translate-x-2 -translate-y-2 border-black border-2   hover:-translate-y-4 hover:-translate-x-4  transition-all  h-10  text-sm placeholder-[#9CA2A9] text-black rounded-lg  w-full p-2.5" 
                                placeholder="Seu nome" 
                                type="text"
                                name="name"
                        />
                    <input className="block -translate-x-2 -translate-y-2 border-black border-2   hover:-translate-y-4 hover:-translate-x-4 transition-all  h-10  text-sm placeholder-[#9CA2A9] text-black rounded-lg  w-full p-2.5" 
                                 placeholder="email@gmail.com"
                                 type="text"
                                 name="email"
                        />
                        <textarea className=" block -translate-x-2 -translate-y-2 border-black border-2   hover:-translate-y-4 hover:-translate-x-4  transition-all   text-sm placeholder-[#9CA2A9] text-black rounded-lg  w-full p-2.5" 
                                  placeholder="Digite aqui sua mensagem"
                                  name="message"   
                        />
                        <button className="   bg-[#3b3c3d] rounded-lg ">
                        <input className="button bg-[#87CEEB]  cursor-pointer block -translate-x-2 -translate-y-2 border-black border-2   hover:-translate-y-4 hover:-translate-x-4 active:translate-x-0 active:translate-y-0 transition-all   text-sm placeholder-[#9CA2A9] text-black rounded-lg  w-full p-2.5" type="submit" value="Enviar"/>
                        </button>
                </form>
                </div>
        </div>
    )
}