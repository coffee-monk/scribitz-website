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
        className="flex flex-col items-center justify-around bg-gradient-to-br from-white via-navy to-navy w-full py-16 px-4"
      >
        <div id="contact-form" className="container mx-auto ">
          <div className="max-w-xl p-5 mx-auto my-10 bg-primary rounded-md shadow-xl">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-secondary">
                Contact Us
              </h1>
              <p className="text-white">
                Fill this form below to send us a message.
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
