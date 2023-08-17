import React from "react"

import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import ReactCountryFlag from "react-country-flag"

import { BsArrowRightShort } from "react-icons/bs"
import { IoRocketSharp } from "react-icons/io5"

const TranslationShowcase = () => {
  return (
    <section className="relative grid min-h-screen before:absolute before:w-full before:h-full before:bg-gradient-to-br before:from-[#c5cacb] before:via-primary before:to-primary before:opacity-90 before:z-10">
      <StaticImage
        className="!absolute w-full h-full"
        src="../../../../images/components/ServicePages/services-showcase.jpg"
        alt="office-team"
      />
      <div className="container flex flex-col lg:flex-row w-full h-full mx-auto items-center justify-between px-4 pt-14 z-40">
        <div className="relative mx-auto text-white z-40 lg:pb-10 pt-4 lg:pt-10">
          <div
            id="text-bg-blur"
            className="absolute w-full -top-20 -left-60 h-full bg-primary opacity-60 rounded-full filter blur-3xl -z-10"
          />
          <div className="max-w-lg pt-12 lg:pb-10">
            <div id="title" className="flex flex-wrap items-start justify-between">
              <h1 className="text-5xl font-bold text-secondary mb-4 z-40">
                Translation
              </h1>
              <div className="flex justify-end items-center text-4xl sm:text-5xl">
                <ReactCountryFlag countryCode="FR" />
                <BsArrowRightShort className="text-white" />
                <ReactCountryFlag countryCode="US" />
              </div>
            </div>

            <div className="text-white">
              <p className="text-3xl font-bold mb-4">
                Translate Your Files From One Language to Another
              </p>
              <p className="text-xl z-40 mb-4">
                Consectetur tenetur sequi alias quisquam vero? Ut repudiandae
                nesciunt qui explicabo tempore? Expedita harum nam magnam amet
                quaerat cumque! Sit?
              </p>
              <p className="text-lg mb-6">
                All our captions are{" "}
                <span className="text-secondary">WCAG 3.0</span>,{" "}
                <span className="text-secondary">AODA</span>, &
                <span className="text-secondary"> ADA</span> compliant
              </p>

              <Link to="/contact/">
                <button className="flex items-center justify-between rounded-full bg-teal-600 text-white hover:bg-teal-500 focus:ring-2 focus:ring-white text-lg font-bold w-lg text-lg px-5 py-2.5 text-center">
                  <IoRocketSharp size="1.25em" className="text-white mr-3" />
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div id="showcase-cartoon" className="mx-auto pt-0 lg:pt-12 p-12">
          <StaticImage
            className="z-40 w-40 lg:w-full md:max-w-md"
            src="../../../../images/components/ServicePages/translation/translation.svg"
            alt="office-team"
          />
        </div>
      </div>
    </section>
  )
}

export default TranslationShowcase
