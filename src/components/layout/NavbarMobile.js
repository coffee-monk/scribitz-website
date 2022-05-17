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
      <li
        onClick={() => setServices(!services)}
        className={`${
          services ? "bg-slate-200" : ""
        }    flex justify-start items-center p-4 font-bold border-b border-t border-primary hover:cursor-pointer hover:bg-slate-200`}
      >
        Services
        <ChevronDownIcon className="w-6 h-5 ml-2" />
      </li>
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
      <li className="p-4 font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200">
        <Link to="/about/">
          <div className="w-full h-full">About</div>
        </Link>
      </li>
      <li className="p-4 font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200">
        <Link to="/contact/">
          <div className="w-full h-full">Contact</div>
        </Link>
      </li>
    </ul>
  )
})

export default NavbarMobile
