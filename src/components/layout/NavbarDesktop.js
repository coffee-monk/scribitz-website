import React, { useState, useEffect, useRef } from "react"

import { MenuAlt3Icon } from "@heroicons/react/solid"
import { ChevronDownIcon } from "@heroicons/react/solid"

import ServiceDropdown from "./ServiceDropdown"

const NavbarDesktop = () => {
  const [navMenu, navMenuToggle] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const serviceRef = useRef()

  useEffect(() => {
    const closeDropdown = e => {
      if (e.path[0] !== serviceRef.current) {
        setIsOpen(false)
        console.log(e)
      }
    }

    document.body.addEventListener("click", closeDropdown)

    return () => document.body.removeEventListener("click", closeDropdown)
  }, [])

  return (
    <div className="flex items-center justify-between w-full p-2">
      <a className="p-2 text-xl font-bold">Scribitz</a>

      <MenuAlt3Icon
        onClick={() => {
          navMenuToggle(!navMenu)
        }}
        className="w-10 h-10 p-2 rounded cursor-pointer hover:text-primary hover:bg-secondary sm:hidden"
      />

      <ul className="flex justify-end items-center hidden text-lg sm:flex">
        <li
          ref={serviceRef}
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen ? "bg-secondary text-primary" : ""
          }  relative flex justify-end items-center p-2 font-bold rounded-t-lg hover:bg-secondary hover:text-primary hover:cursor-pointer`}
        >
          Services
          <ChevronDownIcon className="w-6 h-5 ml-2" />
          {isOpen && <ServiceDropdown />}
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
  )
}

export default NavbarDesktop
