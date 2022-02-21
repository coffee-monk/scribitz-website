import React from "react"

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(" +
          "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
          ")",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Your Content, Accessible Everywhere
          </h1>
          <p className="mb-5">
            Scribitz provides Closed Captions, Live Captions, and Transcription
            Services to make your videos easily accessible
          </p>
          <button className="btn btn-primary">Get a Quote!</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
