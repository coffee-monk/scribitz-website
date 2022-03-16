import React, { useState, useEffect, useRef } from "react"

import { MenuAlt3Icon } from "@heroicons/react/solid"
import { ChevronDownIcon } from "@heroicons/react/solid"

import ServicesDropdown from "./ServicesDropdown"
import NavbarMobile from "./NavbarMobile"

import Logo from "../../images/main/scribitz-final-logo.svg"
import useOutsideClick from "../utils/useOutsideClick"

const Navbar = () => {
  const [navbarMobile, setNavbarMobile] = useState(false)
  const [services, setServices] = useState(false)
  const [scroll, setScroll] = useState(false)

  const servicesRef = useRef()
  const navbarMobileRef = useRef()

  // close services dropdown if click outside
  useOutsideClick(servicesRef, () => {
    if (services) setServices(false)
  })

  // close mobile nav if click outside
  useOutsideClick(navbarMobileRef, () => {
    if (navbarMobile) setNavbarMobile(false)
  })

  useEffect(() => {
    // navbar opacity on scroll
    const checkScroll = () => {
      if (window.scrollY >= 80) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener("scroll", checkScroll)

    return () => {
      window.addEventListener("scroll", checkScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed z-20 w-full text-secondary ${
        scroll
          ? "backdrop-blur-md bg-gradient-to-r from-white/90 via-primary/60 to-primary/70 border-b border-primary"
          : ""
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-3xl p-2 mx-auto">
        <a className="text-xl font-bold">
          <img className="h-10" src={Logo} alt="" />
        </a>

        <MenuAlt3Icon
          onClick={() => {
            setNavbarMobile(!navbarMobile)
          }}
          className={`${
            navbarMobile ? "text-primary bg-secondary " : "text-secondary"
          }     w-10 h-10 p-2 rounded cursor-pointer hover:text-primary hover:bg-secondary sm:hidden`}
        />

        <ul className="flex items-center justify-end hidden text-lg sm:flex">
          <li
            onClick={() => {
              setServices(!services)
            }}
            className={`${
              services ? "bg-secondary text-primary" : ""
            } relative flex justify-end items-center p-2 font-bold rounded-t-lg hover:bg-secondary hover:text-primary hover:cursor-pointer`}
          >
            Services
            <ChevronDownIcon className="w-6 h-5 ml-2" />
            {services && <ServicesDropdown ref={servicesRef} />}
          </li>
          <li className="p-2 ml-4 font-bold rounded-lg hover:bg-secondary hover:text-primary hover:cursor-pointer">
            Pricing
          </li>
          <li className="p-2 ml-4 font-bold rounded-lg hover:bg-secondary hover:text-primary hover:cursor-pointer">
            About
          </li>
          <li>
            <button className="flex justify-between items-center p-2 ml-4 font-bold text-primary bg-secondary hover:bg-yellow-300 hover:cursor-pointer focus:ring-2 focus:ring-yellow-100">
              Contact
            </button>
          </li>
        </ul>
      </div>
      {navbarMobile && <NavbarMobile ref={navbarMobileRef} />}
    </nav>
  )
}

export default Navbar
