import * as React from "react"

import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"
import Showcase from "../components/body/index/Showcase"
import Services from "../components/body/index/Services"
import HowItWorks from "../components/body/index/HowItWorks/HowItWorks"
import OurTeam from "../components/body/index/OurTeam"
import OurExperts from "../components/body/index/OurExperts/OurExperts"
import Welcome from "../components/body/index/Welcome"
import ClientsServed from "../components/body/index/ClientsServed/ClientsServed"
import RegulatoryCompliant from "../components/body/index/RegulatoryCompliant"

import FAQ from "../components/body/index/FAQ/FAQ"

const IndexPage = ({ data }) => {
  console.log(data)

  // ClientsServed Logo Images
  const logos = []
  data.allFile.nodes.map(node => {
    logos.push({
      image: getImage(node),
      id: node.id,
    })
  })

  console.log(logos)

  return (
    <Layout>
      <Showcase />
      <Services />
      <HowItWorks />
      <OurTeam />
      <OurExperts />
      <Welcome title="WELCOME TO SCRIBITZ!" subTitle="ABOUT US" />
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

export default IndexPage
