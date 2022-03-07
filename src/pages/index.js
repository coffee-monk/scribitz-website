import * as React from "react"

import Layout from "../components/layout/Layout"
import Showcase from "../components/body/index/Showcase"
import Welcome from "../components/body/index/Welcome"

const IndexPage = () => {
  return (
    <Layout>
      <Showcase />
      <Welcome />
    </Layout>
  )
}

export default IndexPage
