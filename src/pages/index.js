import * as React from "react"

import Layout from "../components/layout/Layout"
import Showcase from "../components/body/index/Showcase"
import Welcome from "../components/body/index/Welcome"
import RegulatoryCompliant from "../components/body/index/RegulatoryCompliant"
import OurExperts from "../components/body/index/OurExperts"
import SamePage from "../components/body/index/SamePage"
import ClientsServed from "../components/body/index/ClientsServed"

const IndexPage = () => {
  return (
    <Layout>
      <Showcase />
      <Welcome />
      <RegulatoryCompliant />
      <OurExperts />
      <SamePage />
      <ClientsServed />
    </Layout>
  )
}

export default IndexPage
