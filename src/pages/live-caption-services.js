import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/layout/SEO"
import LiveCaptionsShowcase from "../components/body/services/live-captions/LiveCaptionsShowcase"
import HowItWorks from "../components/body/general/HowItWorks/HowItWorks"
import OurCaptioners from "../components/body/general/OurCaptioners"
import SubjectSpecialists from "../components/body/general/SubjectSpecialists/SubjectSpecialists"
import RegulatoryCompliant from "../components/body/general/RegulatoryCompliant"
import FAQ from "../components/body/general/FAQ/FAQ"

const LiveCaptionsPage = () => {
  return (
    <Layout>
      <SEO
        title="Live-Caption Services"
        description="We offer live-caption services for real-time video content and live-events that meet local accessibility standards and regulations"
      />
      <LiveCaptionsShowcase />
      <HowItWorks />
      <OurCaptioners />
      <SubjectSpecialists />
      <RegulatoryCompliant />
      <FAQ />
    </Layout>
  )
}

export default LiveCaptionsPage
