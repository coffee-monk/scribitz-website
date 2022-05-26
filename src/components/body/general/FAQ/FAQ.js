import React from "react"

import Accordian from "./Accordian"

import data from "./data-FAQ"

const FAQ = () => {
  return (
    <section id="faq" className="p-4 bg-gradient-to-b from-primary to-navy">
      <div
        id="title"
        className="flex flex-col items-center justify-between px-4 mt-8"
      >
        <h1 className="text-2xl font-bold text-white">FAQ</h1>
        <h2 className="text-3xl font-bold text-center text-secondary">
          FREQUENTLY ASKED QUESTIONS
        </h2>
      </div>

      <ul className="max-w-2xl mx-auto mt-10 shadow-2xl">
        {data.map((question, i) => (
          <Accordian
            key={i}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </ul>
    </section>
  )
}

export default FAQ
