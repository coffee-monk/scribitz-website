import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import Testimonial from "./Testimonial"

const ClientsServed = ({ logos }) => {
  console.log(logos)

  return (
    <section id="Clients-Served" className="p-4 bg-white-50">
      <div className="max-w-3xl mx-auto">
        <div
          id="title"
          className="flex flex-col items-center justify-between px-4 mt-8"
        >
          <h1 className="text-2xl font-bold text-tertiary">TRUSTED BY</h1>
          <h2 className="text-3xl font-bold text-primary text-center">
            CLIENTS WE'VE SERVED
          </h2>
        </div>

        <div
          id="Client-Logos"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 py-8"
        >
          {logos.map((logo, i) => (
            <div key={i} className="flex justify-around items-center">
              <GatsbyImage image={logo.image} alt="" />
            </div>
          ))}
        </div>
      </div>
      <Testimonial />
    </section>
  )
}

export default ClientsServed
