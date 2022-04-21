import React from "react"

import axios from "axios"

import { useForm } from "../../utils/useForm"
import { isRequired, isEmail, isSelected } from "../../utils/validatorFunctions"

const ContactForm = () => {
  const initialState = { email: "", name: "", phone: "", service: "default" }
  const validations = [
    // email
    ({ email }) =>
      isEmail(email) || { email: "Must have format 'you@example.com'" },
    ({ email }) => isRequired(email) || { email: "E-mail is required" },
    // name
    ({ name }) => isRequired(name) || { name: "Name is required" },
    // phone
    ({ phone }) => isRequired(phone) || { phone: "Phone is required" },
    // services
    ({ service }) =>
      isSelected(service) || { service: "Please choose a service" },
  ]

  const submitContact = event => {
    if (isValid) {
      console.log("Submitted")
    }
    // console.log(name, email, phone, message, service)
    // const data = {
    //   Name: name,
    //   Email: email,
    //   Phone: phone,
    //   Service: service,
    //   Message: message,
    // }
    // axios
    //   .post(
    //     "https://sheet.best/api/sheets/0c84fd7a-b868-482d-968e-fc668d1dbc4d",
    //     data
    //   )
    //   .then(res => {
    //     console.log(res)
    //     setName("")
    //     setEmail("")
    //     setPhone("")
    //     setMessage("")
    //     setService("")
    //   })
  }

  const {
    values,
    isValid,
    errors,
    changeHandler,
    touched,
    showErrors,
    submitHandler,
  } = useForm(initialState, validations, submitContact)

  return (
    <form action="" method="POST" onSubmit={submitHandler}>
      <div className="mb-6">
        <input
          onChange={changeHandler}
          value={values.name}
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
        {showErrors && errors.name && (
          <p className="text-red-500">{errors.name}</p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm text-secondary">
          Email Address
        </label>
        <input
          onChange={changeHandler}
          value={values.email}
          type="email"
          name="email"
          placeholder="you@email.com"
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
        {showErrors && errors.email && (
          <p className="text-red-500">{errors.email}</p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="text-sm text-secondary">
          Phone Number
        </label>
        <input
          onChange={changeHandler}
          value={values.phone}
          type="text"
          name="phone"
          placeholder="91 1234-567"
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
        {showErrors && errors.phone && (
          <p className="text-red-500">{errors.phone}</p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="service" className="text-sm text-secondary mr-2">
          Choose a Service:
        </label>
        <select
          onChange={changeHandler}
          name="service"
          className="bg-secondary rounded-md text-primary font-bold p-2"
        >
          <option value="default">-- Select Service --</option>
          <option value="transcription">Transcription</option>
          <option value="closed-captioning">Closed-Captioning</option>
          <option value="live-captioning">Live-Captions</option>
          <option value="translation">Translation</option>
        </select>
        {showErrors && errors.service && (
          <p className="text-red-500">{errors.service}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm text-secondary">
          Your Message
        </label>
        <textarea
          onChange={changeHandler}
          value={values.message}
          rows="5"
          name="message"
          placeholder="Your Message"
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
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
