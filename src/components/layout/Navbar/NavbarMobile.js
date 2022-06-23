import React, { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/solid"

import { Link } from "gatsby"

const NavbarMobile = React.forwardRef((props, navMobileRef) => {
  const [services, setServices] = useState(false)

  return (
    <ul
      onClick={e => e.stopPropagation()}
      ref={navMobileRef}
      className="text-lg text-primary bg-slate-100 sm:hidden"
    >
      {/*
      <li
        onClick={() => setServices(!services)}
        className={`${
          services ? "bg-slate-200" : ""
        }    flex justify-start items-center p-4 font-bold border-b border-t border-primary hover:cursor-pointer hover:bg-slate-200`}
      >
        Services
        <ChevronDownIcon className="w-6 h-5 ml-2" />
      </li>
    */}
      <Link to="/">
        <li className="p-4 font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200 border-t border-primary">
          <div className="w-full h-full">Home</div>
        </li>
      </Link>
      <ul className={`${services ? "" : "hidden"}`}>
        <li
          className="p-4 pl-14
    font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200"
        >
          Transcription
        </li>
        <li
          className="p-4 pl-14
    font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200"
        >
          Closed-Captioning
        </li>
        <li
          className="p-4 pl-14
    font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200"
        >
          Live-Captioning
        </li>
        <li
          className="p-4 pl-14
    font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200"
        >
          Translation
        </li>
      </ul>
      <Link to="/about/">
        <li className="p-4 font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200">
          <div className="w-full h-full">About</div>
        </li>
      </Link>
      <Link to="/contact/">
        <li className="p-4 font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200">
          <div className="w-full h-full">Contact</div>
        </li>
      </Link>
    </ul>
  )
})

export default NavbarMobile
