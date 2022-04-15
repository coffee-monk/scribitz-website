import React from "react"

import { ArrowCircleUpIcon } from "@heroicons/react/solid"

import social from "./data-social"

const Social = () => {
  // Scrtoll to top button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    })
  }

  return (
    <div
      id="Social"
      className="flex items-center justify-between w-full text-white mx-auto max-w-3xl border-t border-white/30"
    >
      <div className="flex flex-col items-left justify-between max-w-3xl mt-4">
        <div id="social-media-icons" className="flex items-start justify-start">
          {social.map((org, i) => (
            <a key={i} href={org.address}>
              {org.icon}
            </a>
          ))}
        </div>

        <p className="mt-3">
          Scribitz Inc <span>&#169; </span> {new Date().getFullYear()} . All
          Rights Reserved
        </p>
      </div>
      <button onClick={scrollToTop}>
        <ArrowCircleUpIcon className="w-16 pt-4 cursor-pointer text-teal-600 hover:text-teal-500" />
      </button>
    </div>
  )
}

export default Social
