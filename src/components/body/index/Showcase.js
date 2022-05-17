import React from "react"

import { Link } from "gatsby"

import videoURL from "../../../videos/typing-cropped-compressed-2.mp4"

import {
  BadgeCheckIcon,
  ClockIcon,
  SearchIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline"

import { IoRocketSharp } from "react-icons/io5"

const Showcase = () => {
  const iconStyles = "text-yellow w-5 mb-2 hidden sm:block"

  const values = [
    {
      name: "99%+ ACCURACY",
      caption: "Powered by Human Experts",
      icon: <SearchIcon className={iconStyles} />,
    },
    {
      name: "100% COMPLIANCE",
      caption: "WCAG 3.0, AODA, & FCC Compliant",
      icon: <BadgeCheckIcon className={iconStyles} />,
    },
    {
      name: "RELIABLE TURNOVER",
      caption: "Ready Within 24-36 Hours",
      icon: <ClockIcon className={iconStyles} />,
    },
    {
      name: "15+ YEARS EXPERIENCE",
      caption: "Experience with 20+ Subjects",
      icon: <BriefcaseIcon className={iconStyles} />,
    },
  ]

  return (
    <section
      className="relative flex flex-col items-center justify-around min-h-screen text-center overflow-hidden min-w-screen 
    before:absolute before:w-full before:h-full before:bg-gradient-to-br before:from-white before:via-primary before:to-primary before:opacity-80 before:z-10"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute min-w-full min-h-full top-0 left-0 object-cover"
      >
        <source src={videoURL} type="video/mp4"></source>
      </video>

      <div
        id="name"
        className="flex flex-col items-center justify-between max-w-2xl mt-12 z-10"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Your Audio Made Accessible
        </h1>
        <h2 className="my-4 md:text-xl font-bold text-secondary px-4">
          Transcribing, Captioning, & Translating Videos and Live Events
        </h2>

        <ul
          id="Company-Values"
          className="m-4 grid grid-cols-2 gap-4 font-bold lg:mx-10"
        >
          {values.map(value => (
            <li
              key={value.name}
              className="flex flex-col justify-start items-center p-4 shadow-xl rounded-lg text-secondary backdrop-blur-sm bg-primary/30"
            >
              {value.icon}
              <span className="items-center">{value.name}</span>
              <p className="font-normal text-white">{value.caption}</p>
            </li>
          ))}
        </ul>

        <button className="flex justify-between items-center m-3 rounded-lg bg-pink-700 hover:bg-pink-600 focus:ring-2 focus:ring-red-300 text-lg font-bold rounded text-lg px-5 py-2.5 text-center">
          <IoRocketSharp size="1.25em" className="text-white mr-3" />

          <Link className="text-white" to="/contact/">
            Contact Us!
          </Link>
        </button>
      </div>
    </section>
  )
}

export default Showcase
