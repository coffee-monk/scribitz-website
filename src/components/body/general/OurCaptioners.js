import React from "react"

import { StaticImage } from "gatsby-plugin-image"

const OurTeam = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <h1
        id="title"
        className="pt-10 text-4xl font-bold text-center text-primary"
      >
        Our Captioners are People
      </h1>
      <div className="items-center justify-between px-4 py-10 rounded rounded-lg grid md:grid-cols-2 gap-6">
        <StaticImage
          className="rounded-lg"
          src="../../../images/components/OurExperts/OurTeam/laptop-captions.png"
          alt="laptop-captions"
        />
        <div className="grid sm:grid-cols-2 gap-4 md:block mx-auto text-primary text-base sm:text-lg">
          <p className="p-2">
            Our team of human professionals is trained in the most{" "}
            <span className="font-bold">up-to-date techniques</span> in order to
            deliver Closed Captions and Transcription services with{" "}
            <span className="font-bold">99%+ accuracy</span>
          </p>
          <p className="p-2">
            We deliver your captions{" "}
            <span className="font-bold">compliance-ready</span>, so your videos
            are ready for presentation to government agencies and institutions
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
