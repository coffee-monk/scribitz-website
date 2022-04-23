import React from "react"

import axios from "axios"

import { useForm } from "../../utils/useForm"
import { isRequired, isEmail, isSelected } from "../../utils/validatorFunctions"

const ContactForm = () => {
  const initialState = {
    email: "",
    name: "",
    phone: "",
    service: "default",
    message: "",
    company: "",
  }
  const validations = [
    // email
    ({ email }) =>
      isEmail(email) || { email: "Requires format 'you@example.com'" },
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
      console.log(values)
      const data = {
        Name: values.name,
        Company: values.company,
        Email: values.email,
        Phone: values.phone,
        Service: values.service,
        Message: values.message,
      }
      axios
        .post(
          "https://sheet.best/api/sheets/0c84fd7a-b868-482d-968e-fc668d1dbc4d",
          data
        )
        .then(res => {
          console.log("finish")
        })
    }
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
    <div className="bg-slate-50 p-6 rounded-lg shadow w-full max-w-3xl mt-4">
      <div id="title">
        <h1 className="text-center text-2xl font-bold mx-auto">Contact Form</h1>
        <p className="text-sm text-center mx-auto text-gray-600 mb-5 w-full">
          Reach out to our Sales Team!
        </p>
      </div>

      <form action="" method="POST" onSubmit={submitHandler}>
        <div id="name" className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <label htmlFor="name" className="text-sm">
              Name<span className="text-red-600">*</span>
            </label>
            <input
              onChange={changeHandler}
              value={values.name}
              type="text"
              name="name"
              placeholder="Full Name"
            />
            {showErrors && errors.name && (
              <p className="text-red-600 font-bold">{errors.name}</p>
            )}
          </div>

          <div id="company" className="w-full">
            <label htmlFor="company" className="text-sm ">
              Company
            </label>
            <input
              onChange={changeHandler}
              value={values.company}
              type="text"
              name="company"
              placeholder="Your Company"
            />
          </div>
        </div>

        <div id="email" className="grid grid-cols-2 gap-4">
          <div className="mt-4">
            <label htmlFor="email" className="text-sm">
              Email Address<span className="text-red-600">*</span>
            </label>
            <input
              onChange={changeHandler}
              value={values.email}
              type="email"
              name="email"
              placeholder="you@email.com"
            />
            {showErrors && errors.email && (
              <p className="text-red-600 font-bold">{errors.email}</p>
            )}
          </div>

          <div id="phone" className="mt-4">
            <label htmlFor="phone" className="text-sm ">
              Phone Number<span className="text-red-600">*</span>
            </label>
            <input
              onChange={changeHandler}
              value={values.phone}
              type="text"
              name="phone"
              placeholder="XXX XXX XXXX"
            />
            {showErrors && errors.phone && (
              <p className="text-red-600 font-bold">{errors.phone}</p>
            )}
          </div>
        </div>

        <div id="service" className="mt-4">
          <label htmlFor="service" className="text-sm  mr-2">
            Choose a Service<span className="text-red-600">*</span>
          </label>
          <select onChange={changeHandler} name="service" className="bg-white">
            <option value="default">-- Select Service --</option>
            <option value="transcription">Transcription</option>
            <option value="closed-captioning">Closed-Captioning</option>
            <option value="live-captioning">Live-Captions</option>
            <option value="translation">Translation</option>
          </select>
          {showErrors && errors.service && (
            <p className="text-red-600 font-bold">{errors.service}</p>
          )}
        </div>

        <div id="message" className="mt-4">
          <label htmlFor="message" className="text-sm">
            Message
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
