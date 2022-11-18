import React from "react";
import contactIllustration from "../assets/handy-line-mailbox-sends-mail.svg";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="about" className=" overflow-hidden flex justify-center lg:mt-20">
      <div className="flex flex-col lg:flex-row w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-xl items-center  overflow-hidden">
        <Image
          className="hidden lg:block w-80 md:w-96 lg:w-full"
          src={contactIllustration}
          alt="Learning computer gif"
        />
        <div className="flex flex-col w-full  text-justify gap-3 px-4">

        <h2 className=" text-4xl text-center sm:text-5xl lg:text-left lg:text-6xl xl:text-7xl font-bold text-blue-600 uppercase">
            Contact me
        </h2>

          <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
                <label className="text-blue-600 text-xl ml-1" for="fname">Name:</label>
                <input className=" rounded-full py-2 pl-4 duration-200" type="text" id="fname" ></input>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-blue-600 text-xl ml-1"  for="lname">Email:</label>
                <input className=" rounded-full py-2 pl-4 duration-200" type="email" id="email" ></input>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-blue-600 text-xl ml-1"  for="lname">Message:</label>
                <textarea className=" rounded-3xl py-3 pl-4" type="text" id="message" ></textarea>
            </div>

            <button
              className="w-full bg-blue-600 text-white text-base font-semibold py-2 
              rounded-full uppercase hover:bg-opacity-0 border-2 mt-5 border-blue-600 hover:text-blue-600 transition duration-200 ease-in-out"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
