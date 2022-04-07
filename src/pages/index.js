import * as React from "react"

import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"
import Showcase from "../components/body/index/Showcase"
import Welcome from "../components/body/index/Welcome"
import RegulatoryCompliant from "../components/body/index/RegulatoryCompliant"
import OurExperts from "../components/body/index/OurExperts/OurExperts"
import OurTeam from "../components/body/index/OurTeam"
import CEO from "../components/body/index/CEO/CEO"
import SamePage from "../components/body/index/SamePage"
import ClientsServed from "../components/body/index/ClientsServed/ClientsServed"
import Services from "../components/body/index/Services"

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
      <SamePage />
      <OurTeam />
      <OurExperts />
      <Welcome />
      <CEO />
      <ClientsServed logos={logos} />
      <RegulatoryCompliant />
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
