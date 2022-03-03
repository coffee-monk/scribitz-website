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
      <div className="flex flex-col justify-between items-center z-10">
        <h1 className="text-5xl font-bold text-white">
          Your Content,
          <br />
          Accessible Everywhere
        </h1>
        <h2 className="m-4 text-xl text-secondary">
          Scribitz provides Closed Captions, Live Captions, & Transcription
          services to make your videos easily accessible
        </h2>
        <button className="m-3 rounded-lg text-white bg-tertiary hover:bg-red-700 focus:ring-2 focus:ring-red-300 text-lg font-bold rounded text-lg px-5 py-2.5 text-center">
          GET A QUOTE!
        </button>
      </div>
    </section>
  )
}

export default Showcase
