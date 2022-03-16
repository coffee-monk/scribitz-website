import React from "react"

import { IoRocketSharp } from "react-icons/io5"

const RegulatoryCompliant = () => {
  return (
    <section id="RegulatoryCompliant" className="p-4 bg-primary">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-secondary">
          SUBMIT YOUR PROJECT WITH CONFIDENCE
        </h1>
        <h2 className="text-3xl font-bold text-white">
          MAKE SURE YOUR CAPTIONS ARE REGULATORY COMPLIANT
        </h2>
        <p className="text-white mt-2">
          We know there's value in the content you create, that's why our team
          works hard to make your captions compliant with the regulatory
          standards and guidelines: WCAG 3.0, AODA, ADA, FCC, and others!
        </p>
        <p className="text-white mt-2">
          Do you need your captions to meet accessibility regulations?
        </p>

        <button className="flex justify-between items-center rounded-lg text-white bg-tertiary hover:bg-red-700 focus:ring-2 focus:ring-red-300 text-lg font-bold rounded text-lg px-5 py-2.5 text-center mt-4">
          <IoRocketSharp
            size="1.25em"
            className="text-white hover:text-red-400 mr-3"
          />
          CONTACT US
        </button>
      </div>
    </section>
  )
}

export default RegulatoryCompliant
