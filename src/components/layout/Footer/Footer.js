import React from "react"
import { Link } from "gatsby"

import CompanyInfo from "./CompanyInfo"
import FooterBottom from "./FooterBottom"
import FooterTop from "./FooterTop"

import links from "./data-links"

const Footer = () => {
  return (
    <footer className="bg-navy p-4">
      <FooterTop />
      <div id="divider" className="max-w-3xl mx-auto">
        <div className="h-[1px] bg-white/30"></div>
      </div>
      <div id="links">
        <div className="max-w-3xl mx-auto text-white grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 py-8">
          <CompanyInfo />

          {links.map((column, i) => (
            <ul key={i} className="flex flex-col">
              <h1 className="mb-4 text-lg font-bold text-secondary">
                {column.header}
              </h1>

              {column.rows.map((row, i) => {
                if (row.pageLink) {
                  return (
                    <li key={i} className="pb-3">
                      <Link to="#" className="text-gray-400 hover:text-white">
                        {row.text}
                      </Link>
                    </li>
                  )
                } else {
                  return (
                    <li key={i} className="pb-3">
                      <a href="#" className="text-gray-400 hover:text-white">
                        {row.text}
                      </a>
                    </li>
                  )
                }
              })}
            </ul>
          ))}
        </div>
        <div id="divider" className="max-w-3xl mx-auto">
          <div className="h-[1px] bg-white/30"></div>
        </div>
      </div>

      <FooterBottom />
    </footer>
  )
}

export default Footer
