import React, { useState } from "react"

import axios from "axios"

const ContactForm = () => {
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
    <form action="" method="POST" onSubmit={handleSubmit}>
      <div className="mb-6">
        <input
          onChange={e => {
            setName(e.target.value)
          }}
          value={name}
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm text-secondary">
          Email Address
        </label>
        <input
          onChange={e => {
            setEmail(e.target.value)
          }}
          value={email}
          type="email"
          name="email"
          placeholder="you@email.com"
          required
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="text-sm text-secondary">
          Phone Number
        </label>
        <input
          onChange={e => {
            setPhone(e.target.value)
          }}
          value={phone}
          type="text"
          name="phone"
          placeholder="91 1234-567"
          required
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="service" className="text-sm text-secondary mr-2">
          Choose a Service:
        </label>
        <select
          onChange={e => {
            setService(e.target.value)
          }}
          value={service}
          id="service"
          name="service"
          className="bg-secondary rounded-md text-primary font-bold p-2"
        >
          <option value="transcription">Transcription</option>
          <option value="closed-captioning">Closed-Captioning</option>
          <option value="live-captioning">Live-Captions</option>
          <option value="translation">Translation</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm text-secondary">
          Your Message
        </label>

        <textarea
          onChange={e => {
            setMessage(e.target.value)
          }}
          value={message}
          rows="5"
          name="message"
          placeholder="Your Message"
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          required
        ></textarea>
      </div>
      <div className="mb-6">
        <button
          type="submit"
          className="w-full px-2 py-4 text-primary font-bold bg-secondary hover:bg-yellow-300 rounded-md focus:bg-indigo-600 focus:outline-none"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactForm
