import React from "react"

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

      <ul className="max-w-2xl mx-auto mt-10 mb-10 shadow-2xl">
        {data.map((question, i) => (
          <li
            key={i}
            className="p-8 border-b last:rounded-b-lg first:rounded-t-lg bg-amber-50 border-gray-800/50 border-b-primary last:border-none"
          >
            <h1 className="font-bold text-lg text-primary mb-4">
              {question.question}
            </h1>
            <p className="text-gray-800">{question.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FAQ
