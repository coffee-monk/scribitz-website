import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import {
  DesktopComputerIcon,
  AcademicCapIcon,
  BeakerIcon,
  HeartIcon,
  ScaleIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline"

const iconStyles = "w-14 text-secondary z-10"

const data = [
  {
    name: "Information Technology",
    icon: <DesktopComputerIcon className={iconStyles} />,
    img: (
      <StaticImage
        className="absolute w-full h-full"
        src="../../../../images/components/OurExperts/Subjects/it.jpg"
        alt=""
      />
    ),

    description:
      "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
  },
  {
    name: "MEDICAL",
    icon: <HeartIcon className={iconStyles} />,
    img: (
      <StaticImage
        className="absolute w-full h-full"
        src="../../../../images/components/OurExperts/Subjects/medical.jpg"
        alt=""
      />
    ),
    description:
      "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
  },
  {
    name: "ACADEMIC",
    icon: <AcademicCapIcon className={iconStyles} />,
    img: (
      <StaticImage
        className="absolute w-full h-full"
        src="../../../../images/components/OurExperts/Subjects/academic.jpg"
        alt=""
      />
    ),
    description:
      "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
  },
  {
    name: "LEGAL & CORPORATE",
    icon: <ScaleIcon className={iconStyles} />,
    img: (
      <StaticImage
        className="absolute w-full h-full"
        src="../../../../images/components/OurExperts/Subjects/law.jpg"
        alt=""
      />
    ),
    description:
      "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
  },
  {
    name: "STEM",
    icon: <BeakerIcon className={iconStyles} />,
    img: (
      <StaticImage
        className="absolute w-full h-full"
        src="../../../../images/components/OurExperts/Subjects/stem.jpg"
        alt=""
      />
    ),
    description:
      "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
  },
  {
    name: "NON-PROFIT",
    icon: <EmojiHappyIcon className={iconStyles} />,
    img: (
      <StaticImage
        className="absolute w-full h-full"
        src="../../../../images/components/OurExperts/Subjects/ngo.jpg"
        alt=""
      />
    ),
    description:
      "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
  },
]

export default data
