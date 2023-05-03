import React from "react";

import { StaticImage } from "gatsby-plugin-image";

const data = [
  {
    name: "Rene Suarez",
    title: "Founder & Chief Executive Officer",
    img: (
      <StaticImage
        className="w-full rounded-full bg-secondary border-8 border-secondary shadow-xl"
        src="../../../../images/components/CEO/rene-sweater.png"
        alt=""
      />
    ),
  },
  {
    name: "Michael Lo",
    title: "Chief Human Resources Officer",
    img: (
      <StaticImage
        className="w-full rounded-full bg-secondary border-8 border-secondary shadow-xl"
        src="../../../../images/components/CEO/michael-lo.png"
        alt=""
      />
    ),
  },
  {
    name: "Michael Carnevale",
    title: "Chief Technology Officer",
    img: (
      <StaticImage
        className="w-full rounded-full bg-secondary border-8 border-secondary shadow-xl"
        src="../../../../images/components/CEO/MJC/MJC-6-cropped-adjusted.png"
        alt=""
      />
    ),
  },
];

export default data;
