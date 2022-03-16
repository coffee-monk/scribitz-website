import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

const ClientsServed = ({ logos }) => {
  console.log(logos)

  return (
    <section id="Clients-Served" className="p-4 bg-white-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-primary">
          CLIENTS WE'VE SERVED
        </h1>
        <div
          id="Client-Logos"
          className="grid grid-cols-4 gap-8 items-center justify-around"
        >
          {logos.map((logo, i) => (
            <div key={i}>
              <GatsbyImage image={logo.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsServed
