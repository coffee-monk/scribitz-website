import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"

import { MenuAlt3Icon, ChevronDownIcon } from "@heroicons/react/solid"

import Logo from "../../../images/components/Navbar/scribitz-logo.svg"

import NavbarMobile from "./NavbarMobile"
import ServicesDropdown from "./ServicesDropdown"

import { debounce } from "../../utils/debounce"
import useOutsideClick from "../../utils/useOutsideClick"

const Navbar = () => {
  // Navbar
  const [visible, setVisible] = useState(true)
  const [opacity, setOpacity] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  // Navbar Mobile
  const [navbarMobile, setNavbarMobile] = useState(false)
  // Services Dropdown
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [servicesLinkHover, setServicesLinkHover] = useState(false)

  const servicesDropdownRef = useRef()
  const navbarMobileRef = useRef()

  // close services dropdown if click outside
  useOutsideClick(servicesDropdownRef, () => {
    if (servicesDropdown) setServicesDropdown(false)
  })

  // close mobile nav if click outside
  useOutsideClick(navbarMobileRef, () => {
    if (navbarMobile) setNavbarMobile(false)
  })

  // navbar opacity on scroll
  // https://www.devtwins.com/blog/sticky-navbar-hides-scroll
  const handleScroll = debounce(() => {
    const currentScrollPosition = window.pageYOffset
    // nav hide on scroll down or if at top
    setVisible(
      (prevScrollPos > currentScrollPosition &&
        prevScrollPos - currentScrollPosition > 50) ||
        currentScrollPosition < 80
    )

    // nav bg opacity - check if at top or not homepage
    setOpacity(currentScrollPosition >= 80)

    // close dropdown on scroll
    if (
      prevScrollPos - currentScrollPosition > 50 ||
      currentScrollPosition - prevScrollPos > 50
    ) {
      setServicesDropdown(false)
      setNavbarMobile(false)
    }
    setPrevScrollPos(currentScrollPosition)
  }, 70)

  // set event listener and initial state
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    // if window at top, show nav
    if (window.pageYOffset === 0) {
      setVisible(true)
    }
    // if window scroll from top, add background opacity
    if (window.pageYOffset > 20) {
      setOpacity(true)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos, visible, handleScroll])

  return (
    <nav
      id="navbar"
      className={`fixed z-50 w-full text-secondary transition-all ease-in duration-150 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:-z-20 before:transition before:ease-in before:duration-500 ${
        visible ? "" : "-translate-y-full"
      } + " " + ${
        opacity ? "before:border-b before:border-primary" : "before:opacity-0"
      } before:backdrop-blur-md before:bg-gradient-to-r before:from-white/90 before:via-primary/60 before:to-primary/70 `}
    >
      <div className="flex items-center justify-between w-full max-w-3xl p-2 mx-auto">
        <Link className="text-xl font-bold" to="/">
          <img className="h-10" src={Logo} alt="" />
        </Link>

        <MenuAlt3Icon
          onClick={() => {
            setNavbarMobile(!navbarMobile)
          }}
          className={`${
            navbarMobile ? "text-primary bg-secondary" : "text-secondary"
          } w-10 h-10 p-2 rounded cursor-pointer sm:hidden`}
        />

        <ul className="flex items-center justify-end hidden text-lg sm:flex">
          <li
            id="services-dropdown"
            onClick={() => {
              setServicesDropdown(!servicesDropdown)
            }}
            onMouseOver={() => {
              setServicesLinkHover(true)
            }}
            onMouseOut={() => {
              setServicesLinkHover(false)
            }}
            className={`${
              servicesDropdown ? "text-yellow-300" : ""
            } relative flex justify-end items-center p-2 font-bold rounded-t-lg hover:text-yellow-300 hover:cursor-pointer transition delay-75`}
          >
            Services
            <ChevronDownIcon
              className={`transform ${
                servicesDropdown
                  ? "-rotate-180 text-yellow-300 border-yellow-300"
                  : ""
              } 
              ${servicesLinkHover ? "text-yellow-300 border-yellow-300" : ""}
                transition duration-500 ease-in-out w-5 h-5 ml-2 text-secondary border-2 border-secondary rounded-full flex-none ml-3`}
            />
            <ServicesDropdown
              visibility={servicesDropdown}
              ref={servicesDropdownRef}
            />
          </li>
          <li>
            <Link to="/about/">
              <div className="ml-4 p-2 font-bold hover:text-yellow-300 hover:cursor-pointer transition delay-75">
                About
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact/">
              <button className="flex justify-between items-center px-4 py-2 ml-4 font-bold text-primary bg-secondary rounded-full hover:bg-yellow-300 hover:cursor-pointer focus:ring-2 focus:ring-yellow-100 transition delay-75">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </div>
      {navbarMobile && <NavbarMobile ref={navbarMobileRef} />}
    </nav>
  )
}

export default Navbar
