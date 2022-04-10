import React, { useState, useEffect, useRef } from "react"
import data from "./data-carousel"

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1)
  const timeoutRef = useRef(null)
  const delay = 6000

  // https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      if (slideIndex !== data.length) {
        setSlideIndex(slideIndex + 1)
      } else if (slideIndex === data.length) {
        setSlideIndex(1)
      }
    }, delay)

    return () => {
      resetTimeout()
    }
  }, [slideIndex])

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  function nextSlide() {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === data.length) {
      setSlideIndex(1)
    }
  }

  function prevSlide() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(data.length)
    }
  }

  function moveDot(index) {
    setSlideIndex(index)
  }

  return (
    <div className="max-w-3xl h-[600px] mx-auto mt-10 relative overflow-hidden rounded-lg shadow-2xl">
      {data.map((obj, index) => {
        return (
          <div
            key={index}
            className={
              slideIndex === index + 1
                ? "w-full h-full absolute opacity-100 transition-opacity duration-1000 ease-in"
                : "w-full h-full absolute opacity-0 transition-opacity duration-1000 ease-in"
            }
          >
            <div className="absolute w-[85%] rounded-lg p-3 text-xl text-slate-50 bottom-[40px] left-1/2 -translate-x-1/2 bg-gray-800/80">
              <h1>{obj.caption}</h1>
            </div>
            <img
              className="object-cover w-full h-full"
              src={obj.imgURL}
              alt=""
            />
          </div>
        )
      })}

      <MdKeyboardArrowLeft
        onClick={prevSlide}
        className="w-[70px] h-[70px] absolute rounded-full text-gray-800/70 cursor-pointer top-1/2 left-[0px] -translate-y-2/3"
      />
      <MdKeyboardArrowRight
        onClick={nextSlide}
        className="w-[70px] h-[70px] absolute rounded-full text-gray-800/70 cursor-pointer top-1/2 right-[0px] -translate-y-2/3"
      />

      <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1
                ? "w-[20px] h-[20px] mx-[3px] rounded-full cursor-pointer bg-black opacity-80"
                : "w-[20px] h-[20px] mx-[3px] rounded-full cursor-pointer bg-gray-800 opacity-70"
            }
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Slider
