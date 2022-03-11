import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

const ClientsServed = ({ logos }) => {
  console.log(logos)

  return (
    <section id="Clients-Served" className="p-4 bg-rose-100">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-primary">
          CLIENTS WE'VE SERVED
        </h1>
        <div id="Client-Logos" className="mx-auto max-w-2xl md:max-w-4xl">
          {logos.map(logo => (
            <GatsbyImage image={logo.image} alt="" key={logo.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsServed
