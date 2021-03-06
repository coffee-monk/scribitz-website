import React from "react"
import { Link } from "gatsby"

import CompanyInfo from "./CompanyInfo"
import FooterBottom from "./FooterBottom"
import FooterTop from "./FooterTop"
import FooterCity from "./FooterCity"

import links from "./data-links"

const Footer = () => {
  return (
    <footer className="bg-navy p-4 pt-16">
      <FooterCity />

      {/*locationURL.pathname !== "/contact/" && <FooterTop />*/}
      <div id="links">
        <div className="max-w-3xl mx-auto text-white grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 py-8 border-t border-white/30">
          <CompanyInfo />

          {links.map((column, i) => (
            <ul key={i} className="flex flex-col">
              <h1 className="mb-4 text-base sm:text-lg font-bold text-secondary">
                {column.header}
              </h1>

              {column.rows.map((row, i) => {
                if (row.Link) {
                  return (
                    <li key={i} className="pb-3">
                      <Link
                        to={`/${row.address}/`}
                        className="text-gray-400 hover:underline text-sm sm:text-base"
                      >
                        {row.text}
                      </Link>
                    </li>
                  )
                } else {
                  return (
                    <li key={i} className="pb-3">
                      <a
                        href={row.address}
                        className="text-gray-400 hover:underline text-sm sm:text-base"
                      >
                        {row.text}
                      </a>
                    </li>
                  )
                }
              })}
            </ul>
          ))}
        </div>
      </div>

      <FooterBottom />
    </footer>
  )
}

export default Footer
