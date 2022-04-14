import React from "react"
import Carousel from "./Carousel/Carousel"

import { IoCheckmarkCircle } from "react-icons/io5"

const Welcome = () => {
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
        <h1 className="text-2xl font-bold text-white">ABOUT US</h1>
        <h2 className="text-3xl font-bold text-center text-secondary">
          WELCOME TO SCRIBITZ!
        </h2>
      </div>

      <div className="max-w-3xl grid grid-cols-2 gap-4 mx-auto mt-8">
        <div className="flex flex-col items-center justify-start text-secondary">
          <h1 className="text-xl font-bold">Values</h1>
          <ul className="flex flex-col justify-between items-left text-white mt-3 mb-3 last:mb-0">
            {values.map((value, i) => (
              <li
                className="flex items-center justify-start shadow-lg p-2"
                key={i}
              >
                <IoCheckmarkCircle className="flex-none mr-4 text-3xl text-secondary" />
                <p>{value.value}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-start">
          <h1 className="text-xl font-bold text-secondary">Mission</h1>
          <p className="text-white text-lg mt-3 h-full shadow-lg p-2">
            To help businesses and organisations save time and create a
            hearing-friendly digital world. We provide{" "}
            <span className="text-secondary">premium</span> Live Captions,
            Closed Captions, Transcription, and Translation. Along with quality
            customer care, we guarantee compliance with local accessibility
            standards.
          </p>
        </div>
      </div>

      <Carousel />
    </section>
  )
}

export default Welcome
