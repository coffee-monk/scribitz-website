import React, { useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  AcademicCapIcon,
  ClockIcon,
  GlobeAltIcon,
  ChevronDoubleDownIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/solid"

import EmploymentForm from "./forms/EmploymentForm"

const ContactEmployment = () => {
  const scrollToRef = useRef()

  const iconStyles = "w-7"
  const data = {
    header: "COMPANY",
    rows: [
      {
        icon: <GlobeAltIcon className={iconStyles} />,
        text: "Remote work & location independence",
      },
      {
        icon: <ClockIcon className={iconStyles} />,
        text: "Flexible schedules & availability",
      },
      {
        icon: <AcademicCapIcon className={iconStyles} />,
        text: "Diverse knowledge backgrounds",
      },
      {
        icon: <CurrencyDollarIcon className={iconStyles} />,
        text: "Competitive Pay",
      },
    ],
  }

  return (
    <section id="contact-employment">
      <div className="relative grid w-full mx-auto min-h-screen before:absolute before:w-full before:h-full before:bg-gradient-to-br before:from-[#c5cacb] before:via-primary before:to-primary before:opacity-90 before:-z-10">
        <StaticImage
          className="!absolute w-full h-full -z-20"
          src="../../src/images/components/AboutPage/laptop-mobile-desk.jpg/"
          alt="office-team"
        />
        <div
          id="contact-showcase"
          className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-full"
        >
          <div id="contact-us" className="relative mx-auto py-6 lg:py-10">
            <div
              id="text-bg-blur"
              className="absolute w-full -left-40 h-full bg-primary opacity-60 rounded-full filter blur-3xl -z-10"
            />
            <div className="flex flex-col items-left justify-start w-full py-10 px-4 xl:max-w-lg">
              <h1 className="text-secondary text-5xl font-bold mb-4">
                Join Our Team
              </h1>
              <p className="text-white text-xl mb-8 max-w-lg">
                Fill out the{" "}
                <span
                  onClick={() => {
                    scrollToRef.current.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="font-bold hover:text-gray-300 cursor-pointer sm:hover:text-white sm:cursor-auto"
                >
                  contact form
                </span>{" "}
                <span className="hidden">below </span>to share your employment
                information. Please send us any questions or considerations.
              </p>
              <h2 className="text-secondary text-xl font-bold mb-5">
                At Scribitz we offer flexibility and support
              </h2>
              <div className="flex flex-col justify-between">
                {data.rows.map((row, i) => (
                  <li key={i} className="flex items-center justify-start pb-3">
                    <div
                      id="contact-icon"
                      className="text-secondary p-3 mr-4 rounded-full border border-secondary"
                    >
                      {row.icon}
                    </div>
                    <p className="text-white text-lg">{row.text}</p>
                  </li>
                ))}
              </div>
              <button
                onClick={() => {
                  scrollToRef.current.scrollIntoView({ behavior: "smooth" })
                }}
                className="mx-auto mt-12"
              >
                <ChevronDoubleDownIcon className="lg:hidden w-20 cursor-pointer text-white hover:text-gray-300" />
              </button>
            </div>
          </div>

          <div id="contact-form-div" className="hidden lg:block px-4 py-4">
            <EmploymentForm />
          </div>
        </div>
      </div>
      <div
        ref={scrollToRef}
        className="lg:hidden bg-gradient-to-b from-[#265b68] to-navy px-4 py-4 "
      >
        <div className="mx-auto max-w-xl">
          <EmploymentForm />
        </div>
      </div>
    </section>
  )
}

export default ContactEmployment
