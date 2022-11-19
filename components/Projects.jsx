import React from "react";
import Image from "next/image";
import colibreLogo from "../assets/colibreLogo.png";

const Projects = () => {
  return (
    <div id="portfolio" className=" overflow-hidden flex justify-center my-20 lg:mt-44">
      <div className="flex flex-col lg:flex-row w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-xl items-center  overflow-hidden">

        <div className="flex flex-col gap-10 w-full justify-center items-center px-4">

          <h2 className=" text-4xl text-center sm:text-5xl lg:text-left lg:text-6xl xl:text-7xl font-bold text-blue-600 uppercase">
            featured projects
          </h2>

          <div className="flex flex-wrap gap-10 justify-around w-full">
            <div className="w-full md:w-96 h-fit aspect-[1/1] rounded-3xl hover:scale-110 duration-200 hover:cursor-pointer hover:bg-blue-600 before:flex before:justify-center before:items-center before:absolute before:rounded-3xl before:opacity-[90%] before:duration-200 hover:before:w-full hover:before:h-full hover:before:bg-blue-600 hover:before:content-['SEE_MORE'] before:text-white">
                <Image src={colibreLogo} className="w-full h-full rounded-3xl " alt="Coliber Logo Project" />
            </div>
            <div className="w-full md:w-96 h-fit aspect-[1/1] rounded-3xl hover:scale-110 duration-200 hover:cursor-pointer hover:bg-blue-600 before:flex before:justify-center before:items-center before:absolute before:rounded-3xl before:opacity-[90%] before:duration-200 hover:before:w-full hover:before:h-full hover:before:bg-blue-600 hover:before:content-['SEE_MORE'] before:text-white">
                <Image src={colibreLogo} className="w-full h-full rounded-3xl " alt="Coliber Logo Project" />
            </div>
            <div className="w-full md:w-96 h-fit aspect-[1/1] rounded-3xl hover:scale-110 duration-200 hover:cursor-pointer hover:bg-blue-600 before:flex before:justify-center before:items-center before:absolute before:rounded-3xl before:opacity-[90%] before:duration-200 hover:before:w-full hover:before:h-full hover:before:bg-blue-600 hover:before:content-['SEE_MORE'] before:text-white">
                <Image src={colibreLogo} className="w-full h-full rounded-3xl " alt="Coliber Logo Project" />
            </div>

          </div>

          <button
              className="w-full bg-blue-600 text-white text-base font-semibold py-2 
              rounded-full uppercase hover:bg-opacity-0 border-2 mt-5 border-blue-600 hover:text-blue-600 transition duration-200 ease-in-out"
            >
              SEE ALL
            </button>
        </div>

      </div>
    </div>
  );
};

export default Projects;
