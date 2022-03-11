import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const ClientsServed = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        nodes {
          childImageSharp {
            id
            gatsbyImageData
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <section id="Clients-Served" className="p-4 bg-rose-100">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-primary">
          CLIENTS WE'VE SERVED
        </h1>
        <div
          id="Clients"
          className="grid grid-cols-2 gap-4 lg:gap-8 sm:grid-cols-3 md:grid-cols-4 mx-auto max-w-2xl md:max-w-4xl"
        >
          test
        </div>
      </div>
    </section>
  )
}

export default ClientsServed
