import React from "react"

import subjects from "./data-subjects"

const OurExperts = () => {
  return (
    <section id="Our-Experts" className="bg-white-50">
      <div className="bg-slate-200 py-10">
        <div id="title" className="flex flex-col items-center justify-between">
          <h1 className="text-2xl font-bold text-tertiary">OUR EXPERTS</h1>
          <h2 className="text-3xl font-bold text-primary text-center">
            SPECIALIZED HUMAN & LIVE CLOSED CAPTIONERS
          </h2>
        </div>

        <div
          id="subjects"
          className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-2xl md:max-w-4xl mt-10 px-4"
        >
          {subjects.map((subject, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center justify-around text-center before:absolute before:w-full before:h-full before:bg-primary before:opacity-90 before:z-10 p-4"
            >
              {subject.img}
              {subject.icon}
              <h1 className="text-xl font-bold text-center text-secondary mt-2 z-10">
                {subject.name}
              </h1>
              <p className="text-center text-rose-50 font-bold mt-4 z-10">
                {subject.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurExperts
