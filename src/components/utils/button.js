import React from "react"

const Button = ({ children, className, color }) => {
  const test = color

  return (
    <button
      className={`${className} text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 text-lg font-bold rounded text-sm px-5 py-2.5 text-center`}
    >
      {children}
    </button>
  )
}

export default Button
