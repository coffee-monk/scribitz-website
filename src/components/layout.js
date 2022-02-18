import React from "react"

import Header from "./nav/header"
import Footer from "./nav/footer"

import "flowbite"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
