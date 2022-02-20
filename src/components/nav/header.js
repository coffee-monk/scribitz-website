import React, { useState } from "react"

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 px-4 py-2.5 rounded">
      <div className="flex flex-wrap justify-between items-center">
        <a href="#" className="text-lg font-semibold whitespace-nowrap">
          Scribitz
        </a>
      </div>
      <div className="w-full md:block md:w-auto">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  "
            >
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
