import React from "react"

import data from "./data-how-it-works"

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="p-4 bg-primary">
      <div className="max-w-3xl py-10 mx-auto">
        <div id="title" className="flex flex-col items-center justify-between">
          <h1 className="text-2xl font-bold text-white">GET STARTED</h1>
          <h2 className="text-3xl font-bold text-center text-secondary">
            HOW IT WORKS
          </h2>
        </div>

        <ul className="p-6 pb-10 sm:pb-6 mx-auto mt-8 shadow-2xl grid sm:grid-cols-3 gap-5 md:gap-10">
          {data.map((step, i) => (
            <li
              key={i}
              className="flex flex-row-reverse sm:flex-col items-center justify-around sm:justify-start"
            >
              {step.icon}
              <div id="text" className="w-1/2 sm:w-fit mt-4">
                <div className="flex items-start justify-start sm:text-lg font-bold">
                  <span className="text-secondary mr-1">{i + 1}.</span>
                  <h1 className="text-white">{step.header}</h1>
                </div>

                <ul className="flex flex-col items-start justify-start text-white mt-4">
                  {step.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm sm:text-base justify-start"
                    >
                      <span className="text-secondary  mr-1">&#8226;</span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HowItWorks
