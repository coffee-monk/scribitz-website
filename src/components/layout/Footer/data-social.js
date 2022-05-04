import React from "react"

import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"

const iconStyle = "mr-2 text-gray-400 hover:text-white"

const data = [
  {
    address: "https://www.facebook.com/profile.php?id=100080995683229",
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
]

export default data
