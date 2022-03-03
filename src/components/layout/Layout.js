import React from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"

import "./Layout.css"

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
