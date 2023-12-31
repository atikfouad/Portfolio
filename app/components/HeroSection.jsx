"use client";
import Image from "next/image";
import React from "react";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

const HeroSection = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/Mohammed-Faud-CV.pdf'; // Replace with the actual path to your CV file
    downloadLink.download = 'Mohammed-Faud-CV.pdf'; // Replace with the desired file name
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <hi className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-green-500 to-red-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Mohammed",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Web Developer",
                1000,
                "a Mobile Developer",
                1000,
                "a UI-UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </hi>
          <p className="text-[#ADB7BE] text-base sm:text-lg text-lg lg:text-xl mb-6">
          As a seasoned developer with over 5 years of expertise in crafting dynamic web and mobile applications, I am dedicated to delivering optimal speed, security, and user experience. My strength lies in prioritizing agile development methodologies and cultivating robust code architecture that leads to successful project outcomes.{" "}
          </p>
          <div>
            <button className=" px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-green-500 to-red-500 hover:bg-slate-200 text-white">
              Hire me
            </button>
 
            <button  onClick={handleDownload} className=" px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-red-500 hover:bg-slate-800 text-white  mt-3">
             
              <span className="block bg-[#121212]  hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
   
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className=" bg-[#181818] w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] relative">
            <Image
              src="/portfoliopic.jpeg"
              alt="Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              height={150}
              width={150}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
