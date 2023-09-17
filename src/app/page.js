"use client";
import Image from 'next/image';
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithubAlt,
} from "react-icons/fa";
    
export default function Home() {
    const isMobile = window.innerWidth <= 768; // Define your breakpoint here

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
    <main className=" pb-10 max-w-4xl mx-auto">
      <div class="flex flex-col mx-auto p-10 text-center">
        <span className='text-4xl text-orange-500'>⌘</span>
        <h1 className='font-bold pt-3 text-xl sm:text-4xl md:text-5xl'>Arjun Aditya</h1>
        <h2 className='text-slate-500 pt-2 font-medium text-md md:text-lg'>Full Stack Engineer</h2>
         <div className="mt-6 sm:mt-8 flex justify-center  gap-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target={link.target}
            className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-slate-500 bg-white shadow-sm hover:text-red-500 text-2xl sm:text-3xl rounded-xl flex items-center justify-center border border-slate-200 hover:shadow-md duration-200"
          >
            {link.icon}
          </a>
        ))}
        </div> 
          <span className="mt-12 mx-auto bg-white hover border-slate-200 p-4  font-medium text-sm md:text-lg max-w-xl text-gray-600 text-center rounded-xl shadow-sm hover:shadow-md duration-200">Hey 🫡, I'm Nermal, I'm a MERN Stack Programmer / Financial Market Trader 🤌</span>
        <div className='mt-14'>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'> Join My <span className='text-white bg-orange-500 hover:bg-orange-600 duration-100 cursor-pointer p-1'>Discord</span> Server </h2>
          <div className='mx-auto max-w-md p-3 mt-12 justify-center bg-white shadow-sm hover:shadow-md duration-200 rounded-xl '>
            <div className='flex items-center'>
              <span className='flex items-center'>
              <Image
                width="50"
                height="50"
                  src="/command.png"
                  alt="Command Discord Server"
                 className={'rounded-full ' + (isMobile ? 'mobile-image' : '')}
                  draggable={false} 
              />
              <h3 className=' pl-2 text-xs sm:text-2xl lg:text-3xl self-center font-semibold  '>Command</h3>
              </span>
            <span className='flex flex-grow justify-end self-center '><a className=' bg-black hover:bg-gray-800 duration-100 py-2 px-2 sm:px-8 text-xs sm:text-2xl  rounded-3xl font-medium text-white ' href=''>Join</a></span>
            </div>
          </div>
        </div>
        <div className='mt-8  mx-auto'>
          <iframe className='rounded-2xl p-2' 
             width="100%" height="100%" src="https://open.spotify.com/embed/playlist/7x1Mud6oTcl7TLGHDaRhiY?utm_source=generator&theme=0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div className='mx-auto '>
        <Image className='rounded-lg shadow-md hover:shadow-lgmd duration-200 justify-start'
              src="/mahdi.png"
              width="541"
              height="341"
              alt="sky pic"
              draggable={false} 
              loading='lazy'
          />
          <span className=' mt-4 rounded-lg text-xs text-center font-light'>Photo by <a className='text-orange-500 hover:text-orange-600 duration-100 font-medium' href=''>Md Mahdi</a> on <a className='text-orange-500 hover:text-orange-600 duration-100 font-medium' href=''>Unsplash</a> </span>
        </div>
      </div>

      

  
    </main>
  )
}
