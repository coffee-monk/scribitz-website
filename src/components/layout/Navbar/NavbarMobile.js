import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { Link } from 'gatsby'

const NavbarMobile = () => {
  const [services, setServices] = useState(false)

  return (
    <ul onClick={(e) => e.stopPropagation()} className="text-lg text-primary bg-slate-100 sm:hidden">
      <Link to="/">
        <li className="p-4 font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200 border-t border-primary">
          <div className="w-full h-full">Home</div>
        </li>
      </Link>
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
      <li
        onClick={() => setServices(!services)}
        className={`${
          services ? 'bg-slate-200' : ''
        }    flex justify-start items-center p-4 font-bold border-b border-t border-primary hover:cursor-pointer hover:bg-slate-200`}
      >
        Services
        <ChevronDownIcon className="w-6 h-5 ml-2" />
      </li>
      <ul className={`${services ? '' : 'hidden'}`}>
        <Link to="/transcription-services/">
          <li
            className="p-4 pl-14
font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200"
          >
            Transcription
          </li>
        </Link>
        <Link to="/closed-caption-services/">
          <li
            className="p-4 pl-14
font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200"
          >
            Closed-Captioning
          </li>
        </Link>
        <Link to="/live-caption-services/">
          <li
            className="p-4 pl-14
font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200"
          >
            Live-Captioning
          </li>
        </Link>
        <Link to="/translation-services/">
          <li
            className="p-4 pl-14
font-bold border-b border-primary hover:cursor-pointer hover:bg-slate-200"
          >
            Translation
          </li>
        </Link>
      </ul>
    </ul>
  )
}

export default NavbarMobile
