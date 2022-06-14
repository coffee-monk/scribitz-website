import React from "react"

import Layout from "../components/layout/Layout"
import TranslationShowcase from "../components/body/services/translation/TranslationShowcase.js"
import Buffer from "../components/body/services/closed-captions/Buffer"
import HowItWorks from "../components/body/general/HowItWorks/HowItWorks"
import OurCaptioners from "../components/body/general/OurCaptioners"
import SubjectSpecialists from "../components/body/general/SubjectSpecialists/SubjectSpecialists"
import RegulatoryCompliant from "../components/body/general/RegulatoryCompliant"
import FAQ from "../components/body/general/FAQ/FAQ"

const TranslationPage = () => {
  return (
    <Layout>
      <TranslationShowcase />
      <Buffer />
      <HowItWorks />
      <OurCaptioners />
      <SubjectSpecialists />
      <RegulatoryCompliant />
      <FAQ />
    </Layout>
  )
}

export default TranslationPage
