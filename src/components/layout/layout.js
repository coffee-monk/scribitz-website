import React from "react"

import Navbar from "./navbar"
import Footer from "./footer"

import "./layout.css"

// <>
//   <Navbar />
//   <main>{children}</main>
// <Footer/>
// </>

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
