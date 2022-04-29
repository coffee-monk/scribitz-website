import React, { useState } from "react"

import Layout from "../components/layout/Layout"
import ContactForm from "../components/body/contact/ContactForm"

import axios from "axios"

const ContactPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [service, setService] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log(name, email, phone, message, service)
    const data = {
      Name: name,
      Email: email,
      Phone: phone,
      Service: service,
      Message: message,
    }
    axios
      .post(
        "https://sheet.best/api/sheets/0c84fd7a-b868-482d-968e-fc668d1dbc4d",
        data
      )
      .then(res => {
        console.log(res)
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
        setService("")
      })
  }

  return (
    <Layout>
      <section
        id="contact-page"
        className="flex flex-col items-center justify-around bg-gradient-to-b from-white to-navy w-full py-16 px-4"
      >
        <h1 className="text-teal-600 text-2xl sm:text-3xl md:text-4xl text-center font-bold mt-14 mb-6">
          Contact Our Sales Team or Ask a Question!
        </h1>
        <ContactForm />
      </section>
    </Layout>
  )
}

export default ContactPage
