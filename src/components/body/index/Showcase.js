import React from "react"

const Showcase = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(" +
          "https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593324_960_720.jpg" +
          ")",
      }}
      className="relative flex flex-col items-center justify-around min-h-screen text-center bg-bottom bg-no-repeat bg-cover min-w-screen before:absolute before:w-full before:h-full before:bg-gradient-to-br before:from-white before:via-primary before:to-primary before:opacity-80"
    >
      <div className="z-10 flex flex-col mt-10 items-center justify-between">
        <h1 className="hidden sm:block text-5xl font-bold text-white">
          Your Content,
          <br />
          Accessible Everywhere
        </h1>
        <h2 className="m-4 text-2xl font-bold text-secondary">
          Captions, Transcription, & Translation services
          <br />
          to make your videos easily accessible
        </h2>

        <ul className="m-4 grid grid-cols-2 gap-4 font-bold lg:mx-10">
          <li className="p-4 border-2 rounded-lg text-secondary backdrop-blur-md bg-primary/30 border-secondary">
            99% ACCURACY
            <p className="font-normal text-white">Powered by human experts</p>
          </li>
          <li className="p-4 border-2 rounded-lg text-secondary backdrop-blur-md bg-primary/30 border-secondary">
            COMPLIANCE
            <p className="font-normal text-white">
              WCAG 3.0, AODA, & FCC compliant
            </p>
          </li>
          <li className="p-4 border-2 rounded-lg text-secondary backdrop-blur-md bg-primary/30 border-secondary">
            RELIABLE TURNOVER
            <p className="font-normal text-white">Ready within 36-48 hours</p>
          </li>
          <li className="p-4 border-2 rounded-lg text-secondary backdrop-blur-md bg-primary/30 border-secondary">
            15+ YEARS EXPERIENCE
            <p className="font-normal text-white">
              Experience with 20+ subjects
            </p>
          </li>
        </ul>

        <button className="m-3 rounded-lg text-white bg-tertiary hover:bg-red-700 focus:ring-2 focus:ring-red-300 text-lg font-bold rounded text-lg px-5 py-2.5 text-center">
          GET A QUOTE!
        </button>
      </div>
    </section>
  )
}

export default Showcase
