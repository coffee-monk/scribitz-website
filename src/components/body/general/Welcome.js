import React from "react"
import Carousel from "./Carousel/Carousel"

import { IoCheckmarkCircle } from "react-icons/io5"

const Welcome = ({ title, subTitle }) => {
  const values = [
    { value: "Ally to the Deaf & Hard of Hearing" },
    { value: "Diverse & Inclusive Culture" },
    { value: "Flexible Remote Workforce" },
    { value: "Support Professional Communication" },
    { value: "Digital Technology & Innovation" },
  ]

  return (
    <section id="Welcome" className="p-4 bg-primary">
      <div
        id="title"
        className="flex flex-col items-center justify-between px-4 mt-8"
      >
        <h2 className="text-2xl font-bold text-white">{subTitle}</h2>
        <h1 className="text-3xl font-bold text-center text-secondary">
          {title}
        </h1>
      </div>

      <div className="max-w-3xl grid sm:grid-cols-2 gap-4 mx-auto mt-8">
        <div className="flex flex-col items-center justify-start ">
          <h1 className="text-xl font-bold text-secondary text-center mb-3">
            Mission
          </h1>
          <div className="rounded-xl h-full p-2 text-base">
            <p className="text-white mb-2">
              To help businesses and organisations save time and create a
              hearing-friendly digital world. We provide{" "}
              <span className="text-secondary">premium</span> Live Captions,
              Closed Captions, Transcription, & Translation.
            </p>
            <p className="text-white">
              Along with quality customer care, we guarantee compliance with
              local accessibility standards.{" "}
            </p>
          </div>
        </div>

        <div className="text-secondary">
          <h1 className="text-xl text-center font-bold mb-3">Values</h1>
          <ul className="flex flex-col justify-between items-left text-white text-base">
            {values.map((value, i) => (
              <li
                className="flex items-center justify-start p-1 sm:p-2"
                key={i}
              >
                <IoCheckmarkCircle className="flex-none mr-4 text-3xl text-secondary" />
                <p>{value.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <Carousel />
      </div>
    </section>
  )
}

export default Welcome
