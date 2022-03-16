import * as React from "react"

import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"
import Showcase from "../components/body/index/Showcase"
import ShowcaseTest from "../components/body/index/ShowcaseTest"
import Welcome from "../components/body/index/Welcome"
import RegulatoryCompliant from "../components/body/index/RegulatoryCompliant"
import OurExperts from "../components/body/index/OurExperts"
import SamePage from "../components/body/index/SamePage"
import ClientsServed from "../components/body/index/ClientsServed"
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
      <OurExperts />
      <Welcome />
      <ClientsServed logos={logos} />
      <RegulatoryCompliant />
    </Layout>
  )
}

// query client logos
export const MyQuery = graphql`
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
