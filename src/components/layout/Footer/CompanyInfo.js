import React from "react"

import { LocationMarkerIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid"

const companyInfoStyle = "w-6 h-5 mr-2"

const data = {
  header: "COMPANY",
  rows: [
    {
      icon: <LocationMarkerIcon className={companyInfoStyle} />,
      text: "Toronto, Canada",
    },
    {
      icon: <MailIcon className={companyInfoStyle} />,
      text: "info@scribitz.com",
    },
    {
      icon: <PhoneIcon className={companyInfoStyle} />,
      text: "+1 (647) 366 9901",
    },
  ],
}

const CompanyInfo = () => {
  return (
    <ul className="flex flex-col">
      <h1 className="mb-4 text-base sm:text-lg font-bold text-secondary">
        {data.header}
      </h1>

      {data.rows.map((row, i) => (
        <li
          key={i}
          className="flex items-center justify-start pb-3 text-sm sm:text-base"
        >
          {row.icon}
          <p href="#">{row.text}</p>
        </li>
      ))}
    </ul>
  )
}

export default CompanyInfo
