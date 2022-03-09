import React from "react"

const Showcase = () => {
  const values = [
    {
      title: "99% ACCURACY",
      caption: "Powered by Human Experts",
    },
    {
      title: "COMPLIANCE",
      caption: "WCAG 3.0, AODA, & FCC Compliant",
    },
    {
      title: "RELIABLE TURNOVER",
      caption: "Ready Within 36-48 Hours",
    },
    {
      title: "15+ YEARS EXPERIENCE",
      caption: "Experience with 20+ Subjects",
    },
  ]

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
      <div
        id="Content"
        className="flex flex-col items-center justify-between max-w-2xl mt-12 z-10"
      >
        <h1 className="hidden sm:block text-5xl font-bold text-white">
          Your Content,
          <br />
          Accessible Everywhere
        </h1>
        <h2 className="my-4 text-2xl font-bold text-secondary">
          Captions, Transcription, & Translation Services
          <br />
          to Make Your Videos Easily Accessible
        </h2>

        <ul className="m-4 grid grid-cols-2 gap-4 font-bold lg:mx-10">
          {values.map(value => (
            <li className="p-4 shadow shadow-white/60 rounded-lg text-secondary backdrop-blur-md bg-primary/30">
              {value.title}
              <p className="font-normal text-white">{value.caption}</p>
            </li>
          ))}
        </ul>

        <button className="m-3 rounded-lg text-white bg-tertiary hover:bg-red-700 focus:ring-2 focus:ring-red-300 text-lg font-bold rounded text-lg px-5 py-2.5 text-center">
          GET A QUOTE!
        </button>
      </div>
    </section>
  )
}

export default Showcase
