import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/layout/SEO"
import ContactEmployment from "../components/body/contact/ContactEmployment"

const EmploymentPage = () => {
  return (
    <Layout>
      <SEO
        title="Employment"
        description="Join our team! Inquire about employment opportunities."
      />
      <ContactEmployment />
    </Layout>
  )
}

export default EmploymentPage
