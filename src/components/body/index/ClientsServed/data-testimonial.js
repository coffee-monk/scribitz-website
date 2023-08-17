import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

const data = [
  {
    name: 'Matthew Wheatley',
    title: 'Senior Associate',
    testimonial:
      'With the start of exclusively virtual meetings (due to the pandemic) we started recording the meetings. To make them accessible we needed to add captions. We did not have in-house staff that had experience creating captioning files in a format that could be added to the meeting recordings (i.e. SRT files). We now have a reliable source for creating the captioning files we require.',
    img: (
      <StaticImage
        className="w-[100px] rounded-full"
        src="../../../../images/components/ClientsServed/matthew-wheatley.jpg"
        alt="laptop-captions"
      />
    ),
    logo: (
      <StaticImage
        className="w-[150px]"
        src="../../../../images/components/ClientsServed/logos/third-party-public.png"
        alt="testimonial-logo"
      />
    ),
  },
  {
    name: 'Kelly Banh',
    title: 'Researcher & Project Coordinator',
    testimonial:
      'We sought a trusted transcriber that was communicative and understood healthcare and public health systems. We wanted to protect the anonymity of our participants, and did not want to rely on AI software. The reliable, timely and accurate transcripts of our interview and focus groups helped our team create reports that inform our client’s decision-making and policy development.',
    img: (
      <StaticImage
        className="w-[100px] rounded-full"
        src="../../../../images/components/ClientsServed/kelly-banh.png"
        alt="laptop-captions"
      />
    ),
    logo: (
      <StaticImage
        className="w-[150px]"
        src="../../../../images/components/ClientsServed/logos/btcg-logo.png"
        alt="testimonial-logo"
      />
    ),
  },
]

export default data
