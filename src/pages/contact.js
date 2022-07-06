import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/layout/SEO"
import ContactSales from "../components/body/contact/ContactSales"

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contact our sales team or inquire about employment opportunities."
      />
      <ContactSales />
    </Layout>
  )
}

export default ContactPage
