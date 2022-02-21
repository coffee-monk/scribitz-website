import React from "react"

const Header = () => {
  return (
    <nav className="m-0 p-0 box-border fixed w-full z-10">
      <div className="flex justify-content items-center p-[1rem]">
        <a className="border border-solid p-[5px] text-white hover:bg-red-300">
          MICHAEL CARNEVALE
        </a>

        <ul className="list-none">
          <li className="inline-block px-0 py-[15px] uppercase mb-0">
            <a className="text-white mb-[0px] decoration-0">Portfolio</a>
          </li>
          <li className="inline-block px-0 py-[15px] uppercase mb-0">
            <a className="text-white mb-[0px] decoration-0">Blog</a>
          </li>
          <li className="inline-block px-0 py-[15px] uppercase mb-0">
            <a className="uppercase text-white p-[7.5px] m-[0px 7.5px] cursor-pointer hover:bg-red">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
