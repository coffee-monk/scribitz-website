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
  const iconStyles = "text-white"

  const services = [
    {
      service: "Transcription",
      caption: "Convert your audio & video files to text",
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
      caption: "Translate content from one language to another",
      icon1: <ReactCountryFlag countryCode="US" />,
      icon2: <ReactCountryFlag countryCode="FR" />,
    },
  ]

  return (
    <section id="Section" className="bg-primary text-secondary">
      <div className="flex flex-col items-center justify-between max-w-3xl px-4 py-6 mx-auto">
        <h1 className="text-2xl font-bold text-white">OUR</h1>
        <h2 className="text-3xl font-bold">SERVICES</h2>

        <div className="items-center mt-10 text-center grid grid-cols-2 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-between w-full h-full p-6 shadow shadow-white/60 rounded-lg"
            >
              <div className="flex mx-auto text-6xl">
                {service.icon1}
                <BsArrowRightShort className="text-white" />
                {service.icon2}
              </div>
              <h1 className="mt-6 text-xl font-bold">{service.service}</h1>
              <p className="mt-3 text-white font-bold">{service.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
