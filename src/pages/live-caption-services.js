import React from "react"

import Layout from "../components/layout/Layout"
import LiveCaptionsShowcase from "../components/body/services/live-captions/LiveCaptionsShowcase"
import HowItWorks from "../components/body/general/HowItWorks/HowItWorks"

const LiveCaptionsPage = () => {
  return (
    <Layout>
      <LiveCaptionsShowcase />
      <HowItWorks />
    </Layout>
  )
}

export default LiveCaptionsPage
