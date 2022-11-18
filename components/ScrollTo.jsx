import React from 'react'
import { Link } from 'react-scroll'

const ScrollTo = () => {
  return (
    <Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-130}
    duration={800}
  >
    <div className="flex justify-center mt-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-fit text-blue-600 animate-bounce hover:cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  </Link>
  )
}

export default ScrollTo