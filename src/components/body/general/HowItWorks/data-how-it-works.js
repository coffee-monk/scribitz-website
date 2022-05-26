import React from "react"

import { AiOutlineFileDone, AiOutlineCreditCard } from "react-icons/ai"
import { RiFolderUploadLine } from "react-icons/ri"

const iconStyles = "text-5xl text-secondary"

const data = [
  {
    icon: <AiOutlineCreditCard className={iconStyles} />,
    header: "CONTACT SALES",
    points: ["By phone or email", "Paypal, EMT, DD, CC"],
  },
  {
    icon: <RiFolderUploadLine className={iconStyles} />,
    header: "SEND FILES",
    points: ["Send files online", "Any file type"],
  },
  {
    icon: <AiOutlineFileDone className={iconStyles} />,
    header: "GET ORDER",
    points: ["Receive online", "Suggest edits"],
  },
]

export default data
