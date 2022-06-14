import React from "react"

import { BsArrowRightShort } from "react-icons/bs"
import { BiWebcam } from "react-icons/bi"
import { CgFileDocument } from "react-icons/cg"
import {
  FaRegFileAudio,
  FaRegFileVideo,
  FaRegClosedCaptioning,
} from "react-icons/fa"

import ReactCountryFlag from "react-country-flag"

const Services = () => {
  const services = [
    {
      service: "Transcription",
      caption: "Convert audio & video to text",
      icon1: <FaRegFileAudio />,
      icon2: <CgFileDocument />,
    },
    {
      service: "Closed Captioning",
      caption: "Append captions to your video files",
      icon1: <FaRegFileVideo />,
      icon2: <FaRegClosedCaptioning />,
    },
    {
      service: "Live-Captioning",
      caption: "Live-Captions for video conferencing",
      icon1: <BiWebcam />,
      icon2: <FaRegClosedCaptioning />,
    },
    {
      service: "Translation",
      caption: "Translate from one language to another",
      icon1: <ReactCountryFlag countryCode="US" />,
      icon2: <ReactCountryFlag countryCode="FR" />,
    },
  ]

  return (
    <section
      id="Section"
      className="bg-gradient-to-b from-video to-primary text-secondary"
    >
      <div className="flex flex-col items-center justify-between max-w-3xl px-4 py-6 mx-auto">
        <h1 className="text-2xl font-bold text-white">OUR</h1>
        <h2 className="text-3xl font-bold">SERVICES</h2>

        <div className="items-center mt-10 grid grid-cols-1 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="grid grid-cols-2 bg-primary/40 justify-between w-full h-full p-2 sm:p-6 shadow-2xl rounded-lg"
            >
              <div className="flex flex-col justify-between items-start">
                <h1 className="sm:text-xl font-bold">{service.service}</h1>
                <p className="text-sm sm:text-base text-white sm:pr-10">
                  {service.caption}
                </p>
              </div>

              <div className="flex justify-end items-center text-4xl sm:text-5xl">
                {service.icon1}
                <BsArrowRightShort className="text-white" />
                {service.icon2}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
