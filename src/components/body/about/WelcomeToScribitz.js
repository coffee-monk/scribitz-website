import React from "react"

import { StaticImage } from "gatsby-plugin-image"

const WelcomeToScribitz = () => {
  return (
    <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 justify-between items-center px-4 py-10">
      <StaticImage
        className="rounded-lg"
        src="../images/components/AboutPage/office-team.jpg"
        alt="office-team"
      />
      <div className="grid sm:grid-cols-2 gap-4 md:block mx-auto text-primary">
        <p className="pb-2">
          At Scribitz, together with our clients, we’ve served the Deaf and Hard
          of Hearing community for over 15 years. Removing barriers to clear
          communication and client participation is our passion and our main
          driving force
        </p>

        <p className="pb-2">
          We are committed to making knowledge accessible to everyone. We make
          your videos widely accessible using human professionals to deliver
          99%+ accuracy closed captions and transcription services.
        </p>
        <p>All our captions are WCAG 3.0, AODA, & ADA compliant.</p>
      </div>
    </section>
  )
}

export default WelcomeToScribitz
