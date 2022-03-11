import React from "react"

const SamePage = () => {
  return (
    <section id="SamePage" className="p-4 bg-primary">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-secondary">
          ACCESSIBILITY CREATES INCLUSIVITY
        </h1>
        <h2 className="text-3xl font-bold text-white">
          CAPTIONS HELP KEEP EVERYONE ON THE SAME PAGE
        </h2>

        <p className="text-white mt-2">
          Looking for a reliable live captioning service? We got you covered.
        </p>

        <button className="rounded-lg text-white bg-tertiary hover:bg-red-700 focus:ring-2 focus:ring-red-300 text-lg font-bold rounded text-lg px-5 py-2.5 text-center mt-4">
          CONTACT US
        </button>
      </div>
    </section>
  )
}

export default SamePage
