import React from "react"

import { Link } from "gatsby"

const FooterTop = () => {
  return (
    <div className="bg-navy">
      <div className="max-w-3xl mx-auto text-white grid gap-12 sm:grid-cols-2 py-8 border-t border-white/30">
        <div className="flex flex-col items-left justify-between pr-2">
          <h1 className="font-bold text-base sm:text-lg text-white mb-4">
            READY TO GET STARTED?
          </h1>

          <p className="mb-4 text-sm sm:text-base">
            Contact our sales team and submit your project with confidence.
            Ensure that your captions are regulatory compliant.
          </p>

          <Link
            to="/contact/"
            className="text-sm sm:text-base text-teal-600 hover:text-teal-500 mr-auto border-2 border-teal-600 hover:border-teal-500 rounded-full py-2 px-3"
          >
            CONTACT US
          </Link>
        </div>

        <div className="flex flex-col items-left justify-start">
          <h1 className="font-bold text-base sm:text-lg mb-4">JOIN OUR TEAM</h1>
          <p className="mb-4 text-sm sm:text-base">
            Join our freelancing team at Scribitz and work from anywhere,
            anytime. Apply now to become a Transcriptionist, Captioner, or
            Translator.{" "}
          </p>
          <a
            href="#"
            className="text-sm sm:text-base text-teal-600 hover:text-teal-500 mr-auto border-2 border-teal-600 hover:border-teal-500 rounded-full py-2 px-3"
          >
            BECOME A FREELANCER
          </a>
        </div>
      </div>
    </div>
  )
}

export default FooterTop
