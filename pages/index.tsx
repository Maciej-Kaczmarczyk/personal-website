import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ScrollTo from "../components/ScrollTo";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <ScrollTo />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
