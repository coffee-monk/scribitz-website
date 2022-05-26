import React, { useState } from "react"
import { ChevronUpIcon } from "@heroicons/react/solid"

const Accordian = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <li
      onClick={() => setShowAnswer(!showAnswer)}
      className="border-b last:rounded-b-lg first:rounded-t-lg bg-amber-50 hover:bg-amber-100 border-gray-800/50 border-b-primary last:border-none cursor-pointer p-5 sm:p-8"
    >
      <h1 className="flex items-center justify-between font-bold text-base md:text-lg text-primary">
        {question}
        <ChevronUpIcon
          className={`transform ${
            showAnswer ? "rotate-180" : ""
          } transition duration-500 ease-in-out w-5 h-5 ml-2 text-primary border-2 border-primary rounded-full flex-none ml-4`}
        />
      </h1>
      <p
        className={`${
          showAnswer ? "max-h-40" : "max-h-0"
        } overflow-hidden transition-[max-height] duration-500 ease-in-out text-base md:text-lg text-gray-800 w-5/6`}
      >
        <br />

        {answer}
      </p>
    </li>
  )
}

export default Accordian
