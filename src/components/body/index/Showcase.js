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
  const iconStyles = "flex-none text-yellow w-10 mr-4 hidden sm:block z-10"

  const values = [
    {
      name: "99%+ ACCURACY",
      caption: "Verified by Human Experts",
      icon: <SearchIcon className={iconStyles} />,
    },
    {
      name: "100% COMPLIANCE",
      caption: "WCAG 3.0, AODA, ADA",
      icon: <BadgeCheckIcon className={iconStyles} />,
    },
    {
      name: "RELIABLE TURNOVER",
      caption: "Ready within 24-36 Hours",
      icon: <ClockIcon className={iconStyles} />,
    },
    {
      name: "15+ YEARS EXPERIENCE",
      caption: "20+ Subjects",
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
        className="absolute min-w-full min-h-full top-0 left-0 object-cover bg-primary"
      >
        <source src={videoURL} type="video/mp4"></source>
      </video>

      <div
        id="name"
        className="flex flex-col items-center justify-between max-w-3xl mt-12 z-10"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white px-4">
          Your Audio Made Accessible
        </h1>
        <h2 className="my-4 md:text-xl font-bold text-secondary px-4">
          Transcription &#8226; Captions &#8226; Translation &#8226;{" "}
          <span className="whitespace-nowrap">Live Events</span>
        </h2>

        <ul
          id="Company-Values"
          className="m-4 grid grid-cols-2 gap-12 font-bold lg:mx-10 p-4"
        >
          {values.map(value => (
            <li
              key={value.name}
              className="relative flex justify-start items-start rounded-lg text-secondary backdrop-blur-sm"
            >
              <div
                id="text-bg-blur"
                className="absolute w-full h-full bg-primary opacity-60 rounded-full filter blur-3xl"
              />
              {value.icon}
              <div className="relative text-center sm:text-left">
                <span className="items-center">{value.name}</span>
                <p className="font-normal text-white">{value.caption}</p>
              </div>
            </li>
          ))}
        </ul>

        <button className="flex justify-between items-center m-3 rounded-full bg-pink-700 hover:bg-pink-600 focus:ring-2 focus:ring-red-300 text-lg font-bold text-lg px-5 py-2.5 text-center">
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
