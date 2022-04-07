import React, { useState, useEffect, useRef } from "react"

import { MenuAlt3Icon } from "@heroicons/react/solid"
import { ChevronDownIcon } from "@heroicons/react/solid"

import ServicesDropdown from "./ServicesDropdown"
import NavbarMobile from "./NavbarMobile"

import { debounce } from "../utils/debounce"

import Logo from "../../images/components/Navbar/scribitz-final-logo.svg"
import useOutsideClick from "../utils/useOutsideClick"

const Navbar = () => {
  const [navbarMobile, setNavbarMobile] = useState(false)
  const [services, setServices] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(false)
  const [opacity, setOpacity] = useState(false)

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

  // navbar opacity on scroll
  // https://www.devtwins.com/blog/sticky-navbar-hides-scroll
  const handleScroll = debounce(() => {
    const currentScrollPosition = window.pageYOffset
    // nav hide on scroll down
    setVisible(
      (prevScrollPos > currentScrollPosition &&
        prevScrollPos - currentScrollPosition > 50) ||
        currentScrollPosition < 80
    )
    // nav bg opacity
    setOpacity(currentScrollPosition >= 80)
    setPrevScrollPos(currentScrollPosition)
  }, 70)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    if (window.pageYOffset === 0) {
      setVisible(true)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos, visible, handleScroll])

  return (
    <nav
      className={`fixed z-20 w-full text-secondary transition-all ease-in duration-150 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:-z-10 before:transition before:ease-in before:duration-500 ${
        visible ? "" : "-translate-y-full"
      } + " " + ${
        opacity
          ? "before:backdrop-blur-md before:bg-gradient-to-r before:from-white/90 before:via-primary/60 before:to-primary/70 before:border-b before:border-primary"
          : "before:backdrop-blur-md before:bg-gradient-to-r before:from-white/90 before:via-primary/60 before:to-primary/70 before:opacity-0"
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
