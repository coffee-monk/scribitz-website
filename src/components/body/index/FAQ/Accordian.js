import React, { useState } from "react"
import { ChevronUpIcon } from "@heroicons/react/solid"

const Accordian = ({ i, question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <li
      onClick={() => setShowAnswer(!showAnswer)}
      className="p-8 border-b last:rounded-b-lg first:rounded-t-lg bg-amber-50 border-gray-800/50 border-b-primary last:border-none cursor-pointer"
    >
      <h1 className="flex items-center justify-between font-bold text-lg text-primary">
        {question}
        <ChevronUpIcon
          className={`transform ${
            showAnswer ? "rotate-180" : ""
          } transition duration-300 w-5 h-5 ml-2 text-primary border-2 border-primary rounded-full flex-none`}
        />
      </h1>
      <p
        className={`transform ${
          showAnswer ? "" : "hidden"
        } transition duration-300 mt-4 text-gray-800`}
      >
        {answer}
      </p>
    </li>
  )
}

export default Accordian
