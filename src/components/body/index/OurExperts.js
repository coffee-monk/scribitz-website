import React from "react"

import {
  DesktopComputerIcon,
  AcademicCapIcon,
  BeakerIcon,
  HeartIcon,
  ScaleIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline"

import itImgURL from "../../../images/main/components/OurExperts/it.jpg"
import it2ImgURL from "../../../images/main/components/OurExperts/it2.jpg"
import it3ImgURL from "../../../images/main/components/OurExperts/it3.jpg"
import medicalImgURL from "../../../images/main/components/OurExperts/medical.jpg"
import academicImgURL from "../../../images/main/components/OurExperts/academic.jpg"
import ngoImgURL from "../../../images/main/components/OurExperts/ngo.jpg"
import lawImgURL from "../../../images/main/components/OurExperts/law.jpg"
import stemImgURL from "../../../images/main/components/OurExperts/stem.jpg"

const OurExperts = () => {
  const iconStyles = "w-14 text-secondary z-10"

  const subjects = [
    {
      name: "Information Technology",
      icon: <DesktopComputerIcon className={iconStyles} />,
      imgURL: it2ImgURL,
      description:
        "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
    },
    {
      name: "MEDICAL",
      icon: <HeartIcon className={iconStyles} />,
      imgURL: medicalImgURL,
      description:
        "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
    },
    {
      name: "ACADEMIC",
      icon: <AcademicCapIcon className={iconStyles} />,
      imgURL: academicImgURL,

      description:
        "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
    },
    {
      name: "LEGAL & CORPORATE",
      icon: <ScaleIcon className={iconStyles} />,
      imgURL: lawImgURL,
      description:
        "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
    },
    {
      name: "STEM",
      icon: <BeakerIcon className={iconStyles} />,
      imgURL: stemImgURL,
      description:
        "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
    },
    {
      name: "NON-PROFIT",
      icon: <EmojiHappyIcon className={iconStyles} />,
      imgURL: ngoImgURL,
      description:
        "Amet odio ipsa vitae voluptas rerum Ipsam voluptas laudantium voluptate commodi voluptatum. Eaque quam iste quibusdam accusamus natus. Doloribus deserunt.",
    },
  ]

  return (
    <section id="Our-Experts" className="bg-white-50">
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
          {subjects.map((subject, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url(${subject.imgURL})`,
              }}
              className="relative flex flex-col items-center justify-around text-center rounded-lg before:rounded-lg bg-bottom bg-no-repeat bg-cover before:absolute before:w-full before:h-full before:bg-primary before:opacity-80 p-4"
            >
              {subject.icon}
              <h1 className="text-xl font-bold text-center text-secondary mt-2 z-10">
                {subject.name}
              </h1>
              <p className="text-center text-rose-50 font-bold mt-4 z-10">
                {subject.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurExperts
