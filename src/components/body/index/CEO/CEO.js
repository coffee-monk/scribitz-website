import React from "react"

import directors from "./data-CEO"

const CEO = () => {
  return (
    <section id="CEO" className="p-4 bg-primary">
      <div className="max-w-3xl py-10 mx-auto">
        <div id="title" className="flex flex-col items-center justify-between">
          <h1 className="text-2xl font-bold text-white">OUR TEAM</h1>
          <h2 className="text-3xl font-bold text-center text-secondary">
            MEET THE SCRIBITZ FOUNDERS!
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-14">
          {directors.map((director, i) => (
            <div key={i} className="flex flex-col items-center justify-start">
              <div className="w-3/4">{director.img}</div>
              <h1 className="mt-4 text-xl text-center font-bold text-secondary">
                {director.name}
              </h1>
              <p className="sm:mt-2 text-lg sm:text-sm text-center text-slate-50">
                {director.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CEO
