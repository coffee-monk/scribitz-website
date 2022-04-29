import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"

const Testimonial = () => {
  return (
    <div
      id="testimonial"
      className="flex flex-col items-center justify-between max-w-xl p-4 mx-auto rounded-lg shadow-lg shadow-gray-300 my-8"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-start">
          <StaticImage
            className="w-[100px] rounded-full"
            src="../../../../images/components/ClientsServed/matthew-wheatley.jpg"
            alt="laptop-captions"
          />

          <div className="ml-4 text-xs sm:text-base">
            <h1 className="font-bold text-gray-700">Matthew Wheatley</h1>
            <h2 className="text-gray-500">Senior Associate</h2>
          </div>
        </div>

        <StaticImage
          className="w-[150px]"
          src="../../../../images/components/ClientsServed/logos/third-party-public.png"
          alt="testimonial-logo"
        />
      </div>

      <p className="text-gray-700 mt-4 text-xs sm:text-base">
        <RiDoubleQuotesL className="text-gray-400 text-base sm:text-2xl mr-2 inline" />
        With the start of exclusively virtual meetings (due to the pandemic) we
        started recording the meetings. To make them accessible we needed to add
        captions. We did not have in-house staff that had experience creating
        captioning files in a format that could be added to the meeting
        recordings (i.e. SRT files). We now have a reliable source for creating
        the captioning files we require.
        <RiDoubleQuotesR className="text-gray-400 text-base sm:text-2xl ml-1 inline" />
      </p>
    </div>
  )
}

export default Testimonial
