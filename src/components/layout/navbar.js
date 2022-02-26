import React, { useState } from "react"

import { MenuAlt3Icon } from "@heroicons/react/solid"
import { ChevronDownIcon } from "@heroicons/react/solid"

const Navbar = () => {
  const [navMenu, navMenuToggle] = useState(false)

  return (
    <nav className="fixed z-20 w-full text-secondary">
      <div className="flex items-center justify-between w-full p-2">
        <a className="p-2 text-xl font-bold">Scribitz</a>

        <MenuAlt3Icon
          onClick={() => {
            navMenuToggle(!navMenu)
          }}
          className="w-10 h-10 p-2 rounded cursor-pointer hover:text-primary hover:bg-secondary sm:hidden"
        />

        <ul className="flex justify-end items-center hidden text-lg sm:flex">
          <li className="relative flex justify-end items-center p-2 font-bold rounded-t-lg hover:bg-secondary hover:text-primary hover:cursor-pointer">
            Services
            <ChevronDownIcon className="w-6 h-5 ml-2" />
            <div id="dropdown" className="absolute left-0 top-14 flex flex-col">
              <div id="dropdown-menu">
                <ul className="text-primary bg-slate-100 rounded">
                  <li className="p-6 hover:bg-slate-200 border-b hover:rounded-t border-primary">
                    Transcription
                  </li>
                  <li className="p-6 hover:bg-slate-200 border-b border-primary">
                    Captions
                  </li>
                  <li className="p-6 hover:bg-slate-200 border-b border-primary">
                    Live-Transcription
                  </li>
                  <li className="p-6 hover:bg-slate-200 hover:rounded-b">
                    Translation
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="p-2 ml-4 font-bold rounded-lg hover:bg-secondary hover:text-primary hover:cursor-pointer">
            Pricing
          </li>
          <li className="p-2 ml-4 font-bold rounded-lg hover:bg-secondary hover:text-primary hover:cursor-pointer">
            About
          </li>
          <li>
            <button className="p-2 ml-4 font-bold text-primary bg-secondary hover:bg-yellow-300 hover:cursor-pointer focus:ring-2 focus:ring-yellow-100">
              Contact
            </button>
          </li>
        </ul>
      </div>

      {navMenu && (
        <ul className="p-4 text-lg text-white bg-primary sm:hidden">
          <li className="p-2 rounded-lg hover:bg-teal-800 hover:cursor-pointer">
            Services
          </li>
          <li className="p-2 rounded-lg hover:bg-teal-800 hover:cursor-pointer">
            About
          </li>
          <li className="p-2 rounded-lg hover:bg-teal-800 hover:cursor-pointer">
            About
          </li>
          <li className="p-2 rounded-lg hover:bg-teal-800 hover:cursor-pointer">
            Contact
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
