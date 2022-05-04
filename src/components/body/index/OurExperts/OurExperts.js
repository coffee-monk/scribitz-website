import React from "react"

import subjects from "./data-subjects"

const OurExperts = () => {
  return (
    <section id="Our-Experts" className="bg-white-50">
      <div className="bg-slate-200 py-10">
        <div id="title" className="flex flex-col items-center justify-between">
          <h1 className="text-4xl font-bold text-primary text-center">
            Our Captioners are Subject Specialists
          </h1>
        </div>

        <div
          id="subjects"
          className="grid grid-cols-1 gap-4 lg:gap-2 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl mt-10 px-4"
        >
          {subjects.map((subject, i) => (
            <div
              key={i}
              className="relative before:absolute before:w-full before:h-full before:bg-[#10414d] before:opacity-90 before:z-10"
            >
              {subject.img}
              <div className="flex flex-col items-left justify-start text-center p-4">
                {subject.icon}
                <h1 className="text-xl font-bold text-center text-secondary mt-2 z-20">
                  {subject.name}
                </h1>
                <p className="text-left text-rose-50 text-sm md:text-sm lg:text-base mt-2 z-20">
                  {subject.description}
                </p>

                <ul className="flex flex-col items-start justify-start text-white text-xs lg:text-sm mt-4 z-20">
                  {subject.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start justify-start text-left"
                    >
                      <span className="text-secondary text-xs lg:text-sm mr-1">
                        &#8226;
                      </span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurExperts
