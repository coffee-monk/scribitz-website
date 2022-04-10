import React from "react"

const FooterTop = () => {
  return (
    <div className="bg-navy mb-4">
      <div className="max-w-3xl mx-auto text-white grid gap-12 sm:grid-cols-2 py-8">
        <div className="flex flex-col items-left justify-between pr-2">
          <h1 className="font-bold text-lg text-white mb-2">
            READY TO GET STARTED?
          </h1>

          <p className="mb-2">
            Contact our sales team and submit your project with confidence. With
            Scribitz you ensure that your captions are regulatory compliant.
          </p>

          <a href="#" className="text-teal-600 hover:text-teal-500 mr-auto">
            CONTACT US
          </a>
        </div>

        <div className="flex flex-col items-left justify-start">
          <h1 className="font-bold text-lg mb-2">BECOME A FREELANCER</h1>
          <p className="mb-2">
            Join our freelancing team at Scribitz and work from anywhere,
            anytime. Apply now to become a Transcriptionist, Captioner, or
            Translator.{" "}
          </p>
          <a href="#" className="text-teal-600 hover:text-teal-500 mr-auto">
            BECOME A FREELANCER
          </a>
        </div>
      </div>
    </div>
  )
}

export default FooterTop
