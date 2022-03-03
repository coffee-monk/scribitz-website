import React from "react"
import { ChevronDownIcon } from "@heroicons/react/solid"

const NavbarMobile = () => {
  return (
    <ul className="text-lg text-secondary border-white bg-primary sm:hidden">
      <li className="flex justify-start items-center p-4 font-bold hover:bg-teal-700 border-b hover:cursor-pointer">
        Services
        <ChevronDownIcon className="w-6 h-5 ml-2" />
      </li>
      <li className="p-4 font-bold hover:bg-teal-700 border-b hover:cursor-pointer">
        About
      </li>
      <li className="p-4 font-bold hover:bg-teal-700 border-b hover:cursor-pointer">
        About
      </li>
      <li className="p-4 font-bold hover:bg-teal-700 hover:cursor-pointer">
        Contact
      </li>
    </ul>
  )
}

export default NavbarMobile
