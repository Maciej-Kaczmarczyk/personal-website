import React from 'react'
import Image from 'next/image'
import aboutIllustration from "../assets/handy-line-folder-with-idea-bulb.svg";
import cloud1 from "../assets/cloud1.svg";
import cloud2 from "../assets/cloud2.svg";




const About = () => {
  return (
    <div id='about' className=" overflow-hidden flex justify-center lg:mt-20">
      <div className="flex flex-col lg:flex-row w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-xl items-center  overflow-hidden">
      <Image
            className="w-80 md:w-96 lg:w-1/2 lg:mb-40"
            src={aboutIllustration}
            alt="Learning computer gif"
          />
        <div className="flex flex-col w-full lg:w-1/2 text-justify gap-3 px-4">
          <h2 className=" text-6xl text-center sm:text-7xl lg:text-left lg:text-8xl xl:text-9xl font-bold text-blue-600">
            About Me
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-600">
            My name is <span className=' font-bold'>Maciek Kaczmarczyk</span> and I&apos;m a creative
            person based in Poland. My main goal is just to create
            awesome things. Now I&apos;m 20 years old but since 14 
            I have already tried <span className=' font-bold'>graphic design, video editing,  and
            3D modelling</span>. Since last year I have been mainly focused
            on <span className=' font-bold'>UI/UX</span> designing and <span className=' font-bold'>frontend development</span>. My greatest
            asset is that I love to learn new things and technologies. 
          </p>
          <div className="flex justify-center lg:justify-start gap-2">
            <button
              className="w-52 bg-blue-600 text-white text-base font-semibold py-2 
              rounded-full uppercase hover:bg-opacity-0 border-2 mt-5 border-blue-600 hover:text-blue-600 transition duration-200 ease-in-out"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About