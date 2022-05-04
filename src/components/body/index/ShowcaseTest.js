import React from "react"

import videoURL from "../../../videos/typing.mp4"

import {
  BadgeCheckIcon,
  ClockIcon,
  SearchIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline"

import { IoRocketSharp } from "react-icons/io5"

const ShowcaseTest = () => {
  const iconStyles = "text-yellow w-5 hidden sm:block"

  const values = [
    {
      name: "99% ACCURACY",
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
      caption: "Ready Within 36-48 Hours",
      icon: <ClockIcon className={iconStyles} />,
    },
    {
      name: "15+ YEARS EXPERIENCE",
      caption: "Experience with 20+ Subjects",
      icon: <BriefcaseIcon className={iconStyles} />,
    },
  ]

  return (
    <section className="relative flex flex-col items-center justify-around min-h-screen overflow-hidden text-center min-w-screen before:absolute before:w-full before:h-screen before:bg-gradient-to-br before:from-white before:via-primary before:to-primary before:opacity-80 before:z-10">
      <video autoPlay loop muted className="absolute w-full">
        <source src={videoURL} type="video/mp4"></source>
      </video>

      <div
        id="name"
        className="z-10 flex flex-col items-center justify-between max-w-2xl mt-12"
      >
        <h1 className="hidden text-5xl font-bold text-white sm:block">
          Your Content,
          <br />
          Accessible Everywhere
        </h1>
        <h2 className="my-4 text-2xl font-bold text-secondary">
          Captions, Transcription, & Translation Services
          <br />
          to Make Your Videos Easily Accessible
        </h2>

        <ul
          id="Company-Values"
          className="m-4 font-bold grid grid-cols-2 gap-4 lg:mx-10"
        >
          {values.map(value => (
            <li
              key={value.name}
              className="flex flex-col items-center justify-between p-4 rounded-lg shadow shadow-white/60 text-secondary backdrop-blur-md bg-primary/30"
            >
              {value.icon}
              <span className="items-center">{value.name}</span>
              <p className="font-normal text-white">{value.caption}</p>
            </li>
          ))}
        </ul>

        <button className="flex justify-between items-center m-3 rounded-lg text-white bg-tertiary hover:bg-red-700 focus:ring-2 focus:ring-red-300 text-lg font-bold rounded text-lg px-5 py-2.5 text-center">
          <IoRocketSharp
            size="1.25em"
            className="mr-3 text-white hover:text-red-400"
          />
          <Link to="/contact/">CONTACT US</Link>.
        </button>
      </div>
    </section>
  )
}

export default ShowcaseTest
