import React from "react"

import { StaticImage } from "gatsby-plugin-image"

const OurTeam = () => {
  return (
    <section className="mx-auto max-w-4xl">
      <div
        id="title"
        className="flex flex-col items-center justify-between px-4 mt-8"
      >
        <h1 className="text-2xl font-bold text-tertiary">OUR EXPERTS</h1>
        <h2 className="text-3xl font-bold text-primary text-center">
          SPECIALIZED HUMAN & LIVE CLOSED CAPTIONERS
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 justify-between items-center rounded rounded-lg px-4 py-10">
        <StaticImage
          src="../../../images/components/OurExperts/OurTeam/laptop-captions.png"
          alt="laptop-captions"
        />
        <div className="mx-auto text-primary text-lg">
          <p className="p-2">
            Our team of human professionals is trained in the most{" "}
            <span className="font-bold">up-to-date techniques</span> in order to
            deliver Closed Captions and Transcription services with{" "}
            <span className="font-bold">99% accuracy</span>
          </p>
          <p className="p-2">
            We deliver your captions{" "}
            <span className="font-bold">compliance-ready</span>, so your videos
            will be ready to be presented to government agencies and
            institutions
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurTeam