import * as React from "react"

import Layout from "../components/layout"
import Hero from "../components/body/hero"
import Pair from "../components/body/pair"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Pair />
      <Pair />
    </Layout>
  )
}

export default IndexPage
