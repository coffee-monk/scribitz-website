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

        <ul className="p-6 mx-auto mt-8 shadow-2xl grid grid-cols-3 gap-10">
          {data.map((step, i) => (
            <li key={i} className="flex flex-col items-center justify-start">
              {step.icon}
              <h1 className="text-lg text-white font-bold mt-4">
                <span className="text-secondary">{i + 1}.</span> {step.header}
              </h1>

              <ul className="flex flex-col items-start justify-start text-white mt-4">
                {step.points.map((point, i) => (
                  <li key={i} className="flex items-start justify-start">
                    <span className="text-secondary text-xl mr-1">&#8226;</span>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HowItWorks
