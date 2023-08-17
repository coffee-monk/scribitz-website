import React from 'react'

import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

import testimonials from './data-testimonial'

const Testimonial = () => {
  return (
    <div id="testimonials">
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, i) => (
          <div
            id="testimonial"
            key={i}
            className="flex flex-col items-center justify-between max-w-xl p-4 mx-4 rounded-lg shadow-lg shadow-gray-300 my-8"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start">
                {testimonial.img}

                <div className="ml-4 text-xs sm:text-base">
                  <h1 className="font-bold text-gray-700">{testimonial.name}</h1>
                  <h2 className="text-gray-500">{testimonial.title}</h2>
                </div>
              </div>

              {testimonial.logo}
            </div>

            <p className="text-gray-700 mt-4 text-sm sm:text-base">
              <RiDoubleQuotesL className="text-gray-400 text-base sm:text-2xl mr-2 inline" />
              {testimonial.testimonial}
              <RiDoubleQuotesR className="text-gray-400 text-base sm:text-2xl ml-1 inline" />
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
