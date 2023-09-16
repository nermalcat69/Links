"use client";
import Image from 'next/image';
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithubAlt,
} from "react-icons/fa";
    
export default function Home() {

  const links = [
{
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: <FaLinkedinIn />,
      target: "_blank",
    },
    {
      name: "GitHub",
      url: "https://github.com/nermalcat69",
      icon: <FaGithubAlt />,
      target: "_blank",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/",
      icon: <FaTwitter />,
      target: "_blank",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/",
      icon: <FaInstagram />,
      target: "_blank",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen justify-between mx-auto max-w-6xl">
      <div class="flex flex-col mx-auto p-20 text-center">
        <span className='text-4xl text-orange-500'>⌘</span>
        <h1 className='font-bold pt-3 text-4xl md:text-5xl'>Arjun Aditya</h1>
        <h2 className='text-slate-500 pt-2 font-medium text-md md:text-lg'>Full Stack Engineer</h2>
         <div className="mt-12 flex justify-center  gap-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target={link.target}
            className="h-20 w-20 text-slate-600 bg-white shadow-sm hover:text-blue-600 text-3xl rounded-xl flex items-center justify-center border border-slate-200"
          >
            {link.icon}
          </a>
        ))}
        </div> 
          <span className="mt-12 bg-white border-slate-200 p-6 font-medium text-lg max-w-xl text-gray-600 text-start rounded-xl shadow-sm">Hey 🫡, I'm Nermal, I'm a MERN Stack Programmer / Financial market trader 🤌</span>
        <div className='mt-14'>
          <h2 className='text-3xl md:text-4xl font-semibold'> Join My <span className='text-white bg-orange-500 p-1'>Discord</span> Server </h2>
          <div className='flex mt-12 p-10 bg-white shadow-sm rounded-xl '>
            
            <img className='rounded-full justify-start'
                  src="command.png"
                  width="60"
                  height="60"
                  alt="Command Discord Server"
                  draggable={false} 
            />
            <h3 className='text-2xl md:text-3xl ml-5 md:ml-7 self-center font-semibold '>Command</h3>
            <span className='flex flex-grow justify-end self-center '><a className=' bg-black py-2 px-8 text-2xl rounded-3xl text-white ' href=''>Join</a></span>
          </div>
          </div>
      </div>

     
  
    </main>
  )
}
