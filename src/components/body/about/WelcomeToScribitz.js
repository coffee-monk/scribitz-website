import React from "react"

import { StaticImage } from "gatsby-plugin-image"

const WelcomeToScribitz = () => {
  return (
    <section className="relative xl:h-screen before:absolute before:w-full before:h-full before:bg-gradient-to-br before:from-[#c5cacb] before:via-primary before:to-primary before:opacity-90 before:z-10">
      <StaticImage
        className="!absolute w-full h-full"
        src="../../../images/components/AboutPage/office-team.jpg"
        alt="office-team"
      />
      <div className="flex flex-col lg:flex-row container bg-black w-full h-full mx-auto items-center justify-between px-4 pt-14 z-40">
        <div className="relative mx-auto text-white z-40 py-10">
          <div
            id="text-bg-blur"
            className="absolute w-full -top-20 -left-60 h-full bg-primary opacity-60 rounded-full filter blur-3xl -z-10"
          />
          <div
            id="text-bg-blur"
            className="absolute w-full -bottom-20 -left-40 h-full bg-primary opacity-30 rounded-full filter blur-3xl -z-10"
          />
          <div className="max-w-lg py-10">
            <h1 className="text-5xl font-bold text-secondary mb-4 z-40">
              About Scribitz
            </h1>
            <div>
              <p className="text-white text-xl z-40 mb-4">
                At Scribitz, together with our clients, we’ve served the Deaf
                and Hard of Hearing community for over 15 years. Removing
                barriers to clear communication and client participation is our
                passion and our main driving force.
              </p>
              <p className="text-xl text-white mb-4">
                We are committed to making knowledge accessible to everyone. We
                make your videos widely accessible using human professionals to
                deliver 99%+ accuracy closed captions and transcription
                services.
              </p>
              <p className="text-xl">
                All our captions are WCAG 3.0, AODA, & ADA compliant.
              </p>
            </div>
          </div>
        </div>

        <div id="showcase-cartoon" className="mx-auto p-12">
          <StaticImage
            className="z-40 max-w-sm"
            src="../../../images/components/AboutPage/authentication.svg"
            alt="office-team"
          />
        </div>
      </div>
    </section>
  )
}

export default WelcomeToScribitz
