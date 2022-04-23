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
    <div className="bg-white p-8 rounded-lg shadow w-full max-w-3xl">
      <h1>Contact</h1>
      <form action="" method="POST" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name" className="block text-sm ">
            Name
          </label>
          <input
            onChange={changeHandler}
            value={values.name}
            type="text"
            name="name"
            placeholder="Full Name"
          />
          {showErrors && errors.name && (
            <p className="text-red-500">{errors.name}</p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm ">
            Email Address
          </label>
          <input
            onChange={changeHandler}
            value={values.email}
            type="email"
            name="email"
            placeholder="you@email.com"
          />
          {showErrors && errors.email && (
            <p className="text-red-500">{errors.email}</p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="phone" className="text-sm ">
            Phone Number
          </label>
          <input
            onChange={changeHandler}
            value={values.phone}
            type="text"
            name="phone"
            placeholder="XXX XXX XXXX"
          />
          {showErrors && errors.phone && (
            <p className="text-red-500">{errors.phone}</p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="service" className="text-sm  mr-2">
            Choose a Service:
          </label>
          <select onChange={changeHandler} name="service">
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

        <div className="mt-4">
          <label htmlFor="message" className="block text-sm">
            Your Message
          </label>
          <textarea
            onChange={changeHandler}
            value={values.message}
            rows="5"
            name="message"
            placeholder="Please share any questions or considerations"
          ></textarea>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full px-2 py-4 text-white font-bold bg-teal-600 hover:bg-teal-700 rounded-md focus:bg-teal-900"
          >
            Send Contact Info
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
