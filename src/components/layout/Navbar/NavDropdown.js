import React, { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/solid"

const NavbarMobile = () => {
  const [services, setServices] = useState(false)

  return (
    <ul className="text-lg text-primary bg-slate-100 sm:hidden">
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
          Captions
        </li>
        <li
          className="p-4 pl-14
    font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200"
        >
          Live-Transcription
        </li>
        <li
          className="p-4 pl-14
    font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200"
        >
          Translation
        </li>
      </ul>
      <li className="p-4 font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200">
        Pricing
      </li>
      <li className="p-4 font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200">
        About
      </li>
      <li className="p-4 font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200">
        Contact
      </li>
    </ul>
  )
}

export default NavbarMobile
