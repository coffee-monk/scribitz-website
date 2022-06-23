import React from "react"

import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

import "./Layout.css"

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
