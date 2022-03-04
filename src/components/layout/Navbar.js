import React, { useState, useEffect, useRef } from "react"

import { MenuAlt3Icon } from "@heroicons/react/solid"
import { ChevronDownIcon } from "@heroicons/react/solid"

import ServiceDropdown from "./ServiceDropdown"
import NavbarMobile from "./NavbarMobile"

import Logo from "../../images/scribitz-final-logo.svg"

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [scroll, setScroll] = useState(false)

  const serviceRef = useRef()

  // open/close dropdown on click + click outside
  useEffect(() => {
    const closeDropdown = e => {
      if (e.path[0] !== serviceRef.current) {
        setDropdown(false)
        console.log(e)
      }
    }

    const checkScroll = () => {
      if (window.scrollY >= 80) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    document.body.addEventListener("click", closeDropdown)
    window.addEventListener("scroll", checkScroll)

    return () => document.body.removeEventListener("click", closeDropdown)
  }, [])

  return (
    <nav
      className={` ${
        scroll
          ? "backdrop-blur-md bg-gradient-to-r from-white/90 via-primary/20 to-primary/40"
          : ""
      }     fixed z-20 w-full text-secondary `}
    >
      <div className="flex items-center justify-between w-full p-2">
        <a className="text-xl font-bold">
          <img className="h-10" src={Logo} alt="" />
        </a>

        <MenuAlt3Icon
          onClick={() => {
            setNavMobile(!navMobile)
          }}
          className={`${
            navMobile ? "text-primary bg-secondary " : "text-secondary"
          }     w-10 h-10 p-2 rounded cursor-pointer hover:text-primary hover:bg-secondary sm:hidden`}
        />

        <ul className="flex justify-end items-center hidden text-lg sm:flex">
          <li
            ref={serviceRef}
            onClick={() => setDropdown(!dropdown)}
            className={`${
              dropdown ? "bg-secondary text-primary" : ""
            } relative flex justify-end items-center p-2 font-bold rounded-t-lg hover:bg-secondary hover:text-primary hover:cursor-pointer`}
          >
            Services
            <ChevronDownIcon className="w-6 h-5 ml-2" />
            {dropdown && <ServiceDropdown />}
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

      {navMobile && <NavbarMobile />}
    </nav>
  )
}

export default Navbar
