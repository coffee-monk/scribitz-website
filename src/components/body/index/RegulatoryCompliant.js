import React from "react"

import { IoRocketSharp } from "react-icons/io5"

const RegulatoryCompliant = () => {
  return (
    <section
      id="RegulatoryCompliant"
      className="p-14 bg-gradient-to-b from-navy to-primary"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-secondary">
          SUBMIT YOUR PROJECT WITH CONFIDENCE
        </h1>
        <h2 className="text-3xl font-bold text-white pt-1 pb-8">
          MAKE SURE YOUR CAPTIONS ARE REGULATORY COMPLIANT
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-white">
              We know there's value in the content you create, that's why our
              team works hard to make your captions compliant with the
              regulatory standards and guidelines: WCAG 3.0, AODA, ADA, FCC, and
              others!
            </p>
          </div>

          <div className="flex flex-col items-center justify-start">
            <p className="text-secondary font-bold text-center">
              Do you need to meet accessibility regulations?
            </p>

            <button className="flex justify-between items-center rounded-full m-auto bg-secondary text-primary hover:bg-yellow-300 focus:ring-2 focus:ring-red-300 text-lg font-bold rounded w-lg text-lg px-5 py-2.5 text-center">
              <IoRocketSharp size="1.25em" className="text-primary mr-3" />
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegulatoryCompliant
