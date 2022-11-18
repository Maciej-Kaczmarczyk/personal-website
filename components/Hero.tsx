import React from "react";
import computerIllustration from "../assets/handy-line-machine-learning.svg";
import cloud1 from "../assets/cloud1.svg";
import cloud2 from "../assets/cloud2.svg";
import cloud3 from "../assets/cloud3.svg";
import lineShort from "../assets/lineShort.svg";
import Image from 'next/image'

const Hero = () => {
  return (
    <div id="hero" className=" overflow-hidden flex justify-center lg:mt-20">
      <div className="flex flex-col lg:flex-row-reverse w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-xl items-center  overflow-hidden">
        <div className="relative w-full h-60 lg:h-fit lg:flex justify-end ">
          <Image
            className="absolute lg:relative right-0 top-0 w-72 sm:w-80 md:w-96 lg:w-full"
            src={computerIllustration}
            alt="Learning computer gif"
            priority
          />
          <Image className="absolute -z-10 w-60 left-52" src={cloud1} alt="Background Cloud" />
          <Image className="hidden lg:block absolute -z-10 w-60 bottom-0 -left-[30%]" src={cloud1} alt="Background Cloud" />
          <Image className="absolute -z-10 w-32 top-20 lg:-left-[100%] overflow-hidden" src={cloud2} alt="Background Cloud" />
        </div>
        <div className="flex flex-col w-full px-4">
          <h2 className=" text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-blue-600">
            Hello, <br />
            I&apos;m Maciek
          </h2>
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-600">
            I am a designer, developer and a big fan of new technologies.
            <br />
            <span className="font-bold">
              {" "}
              Let&apos;s create something awesome together!
            </span>
          </h1>
          <div className="flex gap-2 mt-4">
            <button
              className="w-52 bg-blue-600 text-white text-base font-semibold py-2 
              rounded-full uppercase hover:bg-opacity-0 hover:border-2 border-blue-600 hover:text-blue-600 transition duration-200 ease-in-out"
            >
              hire me
            </button>
            <button
              className="w-52 border-2 border-blue-600 text-blue-600 text-base font-semibold py-2 
              rounded-full uppercase hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out"
            >
              portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
