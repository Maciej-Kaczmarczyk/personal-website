import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Hero from "../components/Hero";
import About from '../components/About';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <div className="flex justify-center mt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-fit text-blue-600 animate-bounce  hover:cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <About/>
      <Skills/>
    </div>
  )
}
