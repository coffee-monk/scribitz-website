import React from "react"

import { StaticImage } from "gatsby-plugin-image"

const data = [
  {
    name: "Rene Suarez",
    title: "CEO & Co-Founder",
    img: (
      <StaticImage
        className="w-full rounded-full bg-secondary border-4 border-secondary"
        src="../../../../images/components/CEO/portrait.jpg"
        alt=""
      />
    ),
  },
  {
    name: "Michael Lo",
    title: "CEO & Co-Founder",
    img: (
      <StaticImage
        className="w-full rounded-full bg-secondary border-4 border-secondary"
        src="../../../../images/components/CEO/portrait.jpg"
        alt=""
      />
    ),
  },
  {
    name: "Michael Carnevale",
    title: "Chief Technology Officer",
    img: (
      <StaticImage
        className="w-full rounded-full bg-secondary border-4 border-secondary"
        src="../../../../images/components/CEO/portrait.jpg"
        alt=""
      />
    ),
  },
]

export default data
