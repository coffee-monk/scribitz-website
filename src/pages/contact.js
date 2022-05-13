import React, { useState } from "react"

import { StaticImage } from "gatsby-plugin-image"

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
        className="relative w-full h-screen before:absolute before:w-full before:h-full before:bg-gradient-to-br before:from-[#c5cacb] before:via-primary before:to-primary before:opacity-90 before:-z-10"
      >
        <StaticImage
          className="!absolute w-full h-full -z-20"
          src="../../src/images/components/AboutPage/laptop-mobile-desk.jpg/"
          alt="office-team"
        />
        <div className="flex flex-col items-center justify-around w-full py-16 px-4">
          <h1 className="text-secondary text-2xl sm:text-3xl md:text-4xl text-center font-bold mt-14 mb-4">
            Contact Our Sales Team
            <span className="hidden sm:inline-block">
              &nbsp;or Ask a Question
            </span>
            !
          </h1>
          <ContactForm />
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
