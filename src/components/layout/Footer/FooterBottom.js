import React from "react"

import social from "./data-social"

const Social = () => {
  return (
    <div id="Social" className="w-full text-white">
      <div className="flex flex-col items-left justify-between max-w-3xl mx-auto mt-4">
        <div id="social-media-icons" className="flex items-start justify-start">
          {social.map((org, i) => (
            <a key={i} href={org.address}>
              {org.icon}
            </a>
          ))}
        </div>

        <p className="mt-3">
          Scribitz Transcription <span>&#169; </span> {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}

export default Social
