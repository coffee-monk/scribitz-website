import React from "react"

import { StaticImage } from "gatsby-plugin-image"

const Welcome = () => {
  return (
    <section id="Welcome" className="p-4 bg-rose-100">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-3xl mx-auto">
        <div className="hidden sm:flex relative justify-center items-center    ">
          <StaticImage
            className="absolute w-full h-full rounded-lg shadow-md"
            src="../../../images/main/woman-signing.jpg"
            alt="woman speaking in sign language"
            placeholder="blurred"
          />
        </div>
        <div className="p-6 rounded-lg bg-rose-50 shadow-md">
          <h1 className="text-2xl font-bold text-tertiary">WELCOME</h1>
          <h2 className="text-3xl font-bold text-primary">WE ARE SCRIBITZ</h2>
          <p className="mt-2">
            We at Scribitz have served the{" "}
            <span className="font-bold">Deaf & Hard of Hearing community</span>{" "}
            for over <span className="font-bold">15 years</span>. We are
            passionate about removing barriers to accessibility, clear
            communication, and client participation.
          </p>
          <p className="mt-2">
            Our team of human professionals is trained in the{" "}
            <span className="font-bold">most up-to-date techniques</span> in
            order to deliver Closed Captions and Transcription services with{" "}
            <span className="font-bold">99% accuracy</span>.
          </p>
          <p className="mt-2">
            We also offer <span className="font-bold">Live Captioning</span> and{" "}
            <span className="font-bold">Live Transcription</span> services, so
            you can be accessible on the go.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Welcome
