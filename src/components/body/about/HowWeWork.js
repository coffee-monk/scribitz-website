import React from "react"

import {
  UserGroupIcon,
  AcademicCapIcon,
  StarIcon,
  BadgeCheckIcon,
} from "@heroicons/react/solid"

const HowWeWork = () => {
  const iconStyles =
    "flex-none text-secondary bg-primary w-16 mr-5 rounded-full p-2 sm:block mb-4 sm:mb-4"

  const values = [
    {
      title: "Human-Powered Captions",
      caption:
        "Both our live captioning and closed captioning services are human-powered to ensure maximum accuracy in all projects",
      icon: <UserGroupIcon className={iconStyles} />,
    },
    {
      title: "Specialized Experts",
      caption:
        "All our captioners are specialized human professionals. We work in different fields: Medical, legal, corporate, nonprofit, academic, IT, STEM",
      icon: <AcademicCapIcon className={iconStyles} />,
    },
    {
      title: "Regulatory Compliant Captions",
      caption: "All our captions are WCAG 3.0, AODA, & ADA compliant",
      icon: <BadgeCheckIcon className={iconStyles} />,
    },
    {
      title: "15+ Years Experience",
      caption:
        "We have provided accessibility services for the Deaf and Hard of Hearing community for over 15 years",
      icon: <StarIcon className={iconStyles} />,
    },
  ]

  return (
    <section id="how-we-work" className="bg-slate-100 w-full">
      <div className="mx-auto max-w-4xl">
        <h1
          id="title"
          className="text-4xl font-bold text-primary text-center py-10"
        >
          How We Work
        </h1>
        <ul
          id="how-we-work-list"
          className="p-4 grid sm:grid-cols-2 gap-4 font-bold"
        >
          {values.map((value, i) => (
            <li
              key={i}
              className="flex flex-col md:flex-row justify-start items-center md:items-start p-4 text-primary rounded-lg backdrop-blur-sm"
            >
              {value.icon}
              <div>
                <h1 className="text-lg mb-2 text-center md:text-left">
                  {value.title}
                </h1>
                <p className="font-normal text-center md:text-left">
                  {value.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HowWeWork
