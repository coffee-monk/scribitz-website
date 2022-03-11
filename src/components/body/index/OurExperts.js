import React from "react"

import {
  DesktopComputerIcon,
  AcademicCapIcon,
  BeakerIcon,
  HeartIcon,
  UserGroupIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline"

const OurExperts = () => {
  const iconStyles = "w-14 text-primary"

  const subjects = [
    {
      name: "Information Technology",
      icon: <DesktopComputerIcon className={iconStyles} />,
      description:
        "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
    },
    {
      name: "MEDICAL",
      icon: <HeartIcon className={iconStyles} />,
      description:
        "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
    },
    {
      name: "ACADEMIC",
      icon: <AcademicCapIcon className={iconStyles} />,
      description:
        "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
    },
    {
      name: "NON-PROFIT",
      icon: <EmojiHappyIcon className={iconStyles} />,
      description:
        "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
    },
    {
      name: "LEGAL & CORPORATE",
      icon: <UserGroupIcon className={iconStyles} />,
      description:
        "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
    },
    {
      name: "STEM",
      icon: <BeakerIcon className={iconStyles} />,
      description:
        "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
    },
  ]

  return (
    <section id="Our-Experts" className="bg-rose-100">
      <div className="px-4 py-6">
        <div id="title" className="flex flex-col items-center justify-between">
          <h1 className="text-2xl font-bold text-tertiary">OUR EXPERTS</h1>
          <h2 className="text-3xl font-bold text-primary text-center">
            SPECIALIZED HUMAN & LIVE CLOSED CAPTIONERS
          </h2>
        </div>
        <div
          id="topics"
          className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-2xl md:max-w-4xl mt-10"
        >
          {subjects.map(subject => (
            <div
              key={subject.name}
              className="flex flex-col justify-between items-center bg-rose-50 p-4 shadow shadow rounded-md"
            >
              {subject.icon}
              <h1 className="text-xl font-bold text-center text-primary mt-2">
                {subject.name}
              </h1>
              <p className="text-center mt-4">{subject.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurExperts
