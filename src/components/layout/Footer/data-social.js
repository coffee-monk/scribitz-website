import React from "react"

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa"

const iconStyle = "mr-2 text-gray-400 hover:text-white"

const data = [
  {
    address: "https://www.facebook.com/Scribitzinc",
    icon: <FaFacebookSquare size="1.75em" className={iconStyle} />,
  },
  {
    address: "https://twitter.com/ScribitzCC",
    icon: <FaTwitterSquare size="1.75em" className={iconStyle} />,
  },
  {
    address: "https://www.linkedin.com/company/scribitz/",
    icon: <FaLinkedin size="1.75em" className={iconStyle} />,
  },
  {
    address: "https://www.instagram.com/scribitzinc/",
    icon: <FaInstagramSquare size="1.75em" className={iconStyle} />,
  },
]

export default data
