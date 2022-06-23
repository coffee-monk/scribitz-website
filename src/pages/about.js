import React from "react"

import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"
import SEO from "../components/layout/SEO"
import WelcomeToScribitz from "../components/body/about/WelcomeToScribitz"
import HowWeWork from "../components/body/about/HowWeWork"
import Welcome from "../components/body/general/Welcome"
import CEO from "../components/body/about/CEO/CEO"
import ClientsServed from "../components/body/index/ClientsServed/ClientsServed"
import RegulatoryCompliant from "../components/body/general/RegulatoryCompliant"
import FAQ from "../components/body/general/FAQ/FAQ"

const AboutPage = ({ data }) => {
  // ClientsServed Logo Images
  const logos = []
  data.allFile.nodes.map(node => {
    logos.push({
      image: getImage(node),
      id: node.id,
    })
  })

  return (
    <Layout>
      <SEO
        title="About"
        description="Here at Scribitz we are committed to making communication accessible to everyone"
      />
      <WelcomeToScribitz />
      <HowWeWork />
      <Welcome title="OUR MISSION & VALUES" />
      <CEO />
      <ClientsServed logos={logos} />
      <RegulatoryCompliant />
      <FAQ />
    </Layout>
  )
}

// query client logos
export const ClientLogosQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "logos" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(height: 150, placeholder: BLURRED)
        }
        id
      }
    }
  }
`

export default AboutPage
