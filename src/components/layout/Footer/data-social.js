import React from "react"

import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"

const iconStyle = "mr-2 text-gray-400 hover:text-white"

const data = [
  {
    address: "www.facebook.com",
    icon: <FaFacebookSquare size="1.75em" className={iconStyle} />,
  },
  {
    address: "www.twitter.com",
    icon: <FaTwitterSquare size="1.75em" className={iconStyle} />,
  },
  {
    address: "www.linkedIn.com",
    icon: <FaLinkedin size="1.75em" className={iconStyle} />,
  },
]

export default data
