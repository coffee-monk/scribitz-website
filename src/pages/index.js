import * as React from "react"

import Layout from "../components/layout/Layout"
import Showcase from "../components/body/index/Showcase"
import Welcome from "../components/body/index/Welcome"
import RegulatoryCompliant from "../components/body/index/RegulatoryCompliant"

const IndexPage = () => {
  return (
    <Layout>
      <Showcase />
      <Welcome />
      <RegulatoryCompliant />
    </Layout>
  )
}

export default IndexPage
