import React from "react"

import { StaticImage } from "gatsby-plugin-image"

const WelcomeToScribitz = () => {
  return (
    <section className="relative grid min-h-screen before:absolute before:w-full before:h-full before:bg-gradient-to-br before:from-[#c5cacb] before:via-primary before:to-primary before:opacity-90 before:z-10">
      <StaticImage
        className="!absolute w-full h-full"
        src="../../../images/components/AboutPage/office-team.jpg"
        alt="office-team"
      />
      <div className="container flex flex-col lg:flex-row w-full h-full mx-auto items-center justify-between px-4 pt-14 z-40">
        <div className="relative mx-auto text-white z-40 lg:pb-10 pt-4 lg:pt-10">
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
            <div className="text-white">
              <p className="text-3xl font-bold mb-4">
                We are committed to making communication accessible to everyone
              </p>
              <p className="text-xl z-40 mb-4">
                Our team of professionals delivers 99%+ accurate closed captions
                and transcripts, removing barriers and maximizing your reach,
                improving your SEO and maximizing your ROI
              </p>
              <p className="text-lg">
                All our captions are{" "}
                <span className="text-secondary">WCAG 3.0</span>,{" "}
                <span className="text-secondary">AODA</span>, &
                <span className="text-secondary"> ADA</span> compliant
              </p>
            </div>
          </div>
        </div>

        <div id="showcase-cartoon" className="mx-auto pt-0 lg:pt-12 p-12">
          <StaticImage
            className="z-40 w-40 lg:w-full md:max-w-sm"
            src="../../../images/components/AboutPage/authentication.svg"
            alt="office-team"
          />
        </div>
      </div>
    </section>
  )
}

export default WelcomeToScribitz
