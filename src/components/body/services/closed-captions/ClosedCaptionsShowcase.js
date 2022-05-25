import React from "react"

import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import { BsArrowRightShort } from "react-icons/bs"
import { FaRegFileVideo, FaRegClosedCaptioning } from "react-icons/fa"
import { IoRocketSharp } from "react-icons/io5"

const ClosedCaptionsShowcase = () => {
  return (
    <section className="relative grid min-h-screen before:absolute before:w-full before:h-full before:bg-gradient-to-br before:from-[#c5cacb] before:via-primary before:to-primary before:opacity-90 before:z-10">
      <StaticImage
        className="!absolute w-full h-full"
        src="../../../../images/components/ServicePages/transcription/services-showcase-gray.jpg"
        alt="office-team"
      />
      <div className="container z-40 flex flex-col items-center justify-between w-full h-full px-4 mx-auto lg:flex-row pt-14">
        <div className="relative z-40 pt-4 mx-auto text-white lg:pb-10 lg:pt-10">
          <div
            id="text-bg-blur"
            className="absolute w-full h-full rounded-full -top-20 -left-60 bg-primary opacity-60 filter blur-3xl -z-10"
          />
          <div className="max-w-xl pt-12 lg:pb-10">
            <div id="title" className="flex items-start justify-between">
              <h1 className="z-40 mb-4 text-5xl font-bold text-secondary">
                Closed-Captions
              </h1>
              <div className="flex items-center justify-end text-4xl sm:text-5xl">
                <FaRegFileVideo className="text-secondary" />
                <BsArrowRightShort className="text-white" />
                <FaRegClosedCaptioning className="text-secondary" />
              </div>
            </div>

            <div className="text-white">
              <p className="mb-4 text-3xl font-bold">
                Embed Captions Into Your Video Files
              </p>
              <p className="z-40 mb-4 text-xl">
                Our team of professionals delivers 99%+ accurate closed captions
                and transcripts, removing barriers and maximizing your reach,
                improving your SEO and maximizing your ROI
              </p>
              <p className="mb-6 text-lg">
                All our captions are{" "}
                <span className="text-secondary">WCAG 3.0</span>,{" "}
                <span className="text-secondary">AODA</span>, &
                <span className="text-secondary"> ADA</span> compliant
              </p>

              <Link to="/contact/">
                <button className="flex items-center justify-between rounded-full bg-teal-600 text-white hover:bg-teal-500 focus:ring-2 focus:ring-white text-lg font-bold w-lg text-lg px-5 py-2.5 text-center">
                  <IoRocketSharp size="1.25em" className="mr-3 text-white" />
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div id="showcase-cartoon" className="p-12 pt-0 mx-auto lg:pt-12">
          <StaticImage
            className="z-40 w-40 lg:w-full md:max-w-md"
            src="../../../../images/components/ServicePages/closed-captions/closed-captions.svg"
            alt="office-team"
          />
        </div>
      </div>
    </section>
  )
}

export default ClosedCaptionsShowcase
