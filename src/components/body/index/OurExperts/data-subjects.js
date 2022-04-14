import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import {
  HomeIcon,
  AcademicCapIcon,
  BeakerIcon,
  HeartIcon,
  ScaleIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/outline"

const iconStyles = "w-14 text-secondary z-20 mx-auto"

const data = [
  {
    name: "Urban Planning",
    icon: <HomeIcon className={iconStyles} />,
    img: (
      <StaticImage
        style={{
          position: "absolute !important",
          width: "100%",
          height: "100%",
        }}
        src="../../../../images/components/OurExperts/Subjects/it.jpg"
        alt=""
      />
    ),
    description:
      "Responsible development can’t take place without closed captioned community consultations, and live captions encourage full audience participation. We cover:",
    points: [
      "Several panelists & participants",
      "Accurate street names & Urban Planning terminology",
      "Indigenous languages",
    ],
  },
  {
    name: "Medical",
    icon: <HeartIcon className={iconStyles} />,
    img: (
      <StaticImage
        style={{
          position: "absolute !important",
          width: "100%",
          height: "100%",
        }}
        src="../../../../images/components/OurExperts/Subjects/medical.jpg"
        alt=""
      />
    ),
    description:
      "We know the impact one typo can make in a medical document. Among our Scribes are seasoned medical transcriptionists and some medical professionals.",
    points: [
      "Accurate Medical & Drug nomenclature",
      "Special care to protect sensitive data",
      "Client Information & Health Reports",
    ],
  },
  {
    name: "Academic",
    icon: <AcademicCapIcon className={iconStyles} />,
    img: (
      <StaticImage
        style={{
          position: "absolute !important",
          width: "100%",
          height: "100%",
        }}
        src="../../../../images/components/OurExperts/Subjects/academic.jpg"
        alt=""
      />
    ),
    description:
      "We’ve served Canada’s colleges and universities for 15+ years. There isn’t a subject we can’t make accessible for your students.",
    points: [
      "Pre-recorded & live remote classes",
      "College, Undergraduate & Masters-level classes",
      "Staff/Faculty meetings",
      "Symposiums & Special Events",
    ],
  },
  {
    name: "Legal",
    icon: <ScaleIcon className={iconStyles} />,
    img: (
      <StaticImage
        style={{
          position: "absolute !important",
          width: "100%",
          height: "100%",
        }}
        src="../../../../images/components/OurExperts/Subjects/law.jpg"
        alt=""
      />
    ),
    description:
      "When every word counts, lexical and contextual accuracy are critical. Our dedicated legal transcriptionists & live captioners guarantee the highest level of accuracy.",
    points: ["Private Mediation", "Court proceedings", "Meetings with lawyers"],
  },
  {
    name: "STEM",
    icon: <BeakerIcon className={iconStyles} />,
    img: (
      <StaticImage
        style={{
          position: "absolute !important",
          width: "100%",
          height: "100%",
        }}
        src="../../../../images/components/OurExperts/Subjects/stem.jpg"
        alt=""
      />
    ),
    description:
      "Spelling isn’t everything. An AI might spell the words “mesenchymal sesquiterpene” correctly, without realizing the words would never appear together.",
    points: [
      "Biology, Chemistry, Physics, Statistics",
      "Biomedical Engineering, Industrial Design",
      "Artificial Intelligence, Information Technology",
    ],
  },
  {
    name: "Corporate & Non-Profit",
    icon: <OfficeBuildingIcon className={iconStyles} />,
    img: (
      <StaticImage
        style={{
          position: "absolute !important",
          width: "100%",
          height: "100%",
        }}
        src="../../../../images/components/OurExperts/Subjects/ngo.jpg"
        alt=""
      />
    ),
    description:
      "The value and power of information grows indefinitely. Our transcripts can be delivered in many standardized formats, to move critical data through digitized value chains.",
    points: ["AGM minutes", "Board Meeting summaries", "Captioned Powerpoints"],
  },
]

export default data
