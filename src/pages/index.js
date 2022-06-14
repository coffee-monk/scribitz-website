import * as React from "react"

import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"
import IndexShowcase from "../components/body/index/IndexShowcase"
import Services from "../components/body/index/Services"
import HowItWorks from "../components/body/general/HowItWorks/HowItWorks"
import OurCaptioners from "../components/body/general/OurCaptioners"
import SubjectSpecialists from "../components/body/general/SubjectSpecialists/SubjectSpecialists"
import Welcome from "../components/body/general/Welcome"
import ClientsServed from "../components/body/index/ClientsServed/ClientsServed"
import RegulatoryCompliant from "../components/body/general/RegulatoryCompliant"
import FAQ from "../components/body/general/FAQ/FAQ"

const IndexPage = ({ data }) => {
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
      <IndexShowcase />
      <Services />
      <HowItWorks />
      <OurCaptioners />
      <SubjectSpecialists />
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
