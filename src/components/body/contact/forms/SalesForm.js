import React, { useState } from "react"

import { CheckCircleIcon } from "@heroicons/react/solid"

import { useForm } from "../../../utils/useForm"
import {
  isRequired,
  isEmail,
  isSelected,
} from "../../../utils/validatorFunctions"

// https://dev.to/emekaugbanu/how-to-store-form-data-to-google-sheets-using-reactjsgatsbyjs-or-nextjs-248l
import SteinStore from "stein-js-client"
const store = new SteinStore(
  "https://api.steinhq.com/v1/storages/62b90055bca21f053ea0865c"
)

const SalesForm = () => {
  const [showSubmitMsg, setShowSubmitMsg] = useState(false)

  const initialState = {
    email: "",
    name: "",
    phone: "",
    service: "default",
    message: "",
    company: "",
    city: "",
    get_promo: false,
  }

  const validations = [
    // Name
    ({ name }) => isRequired(name) || { name: "Name is required" },
    // Email
    ({ email }) => isEmail(email) || { email: "Format: 'you@example.com'" },
    ({ email }) => isRequired(email) || { email: "E-mail is required" },
    // City
    ({ city }) => isRequired(city) || { city: "City is required" },
    // Phone
    ({ phone }) => isRequired(phone) || { phone: "Phone is required" },
    // Services
    ({ service }) =>
      isSelected(service) || { service: "Please choose a service" },
  ]

  const submitContact = e => {
    if (isValid) {
      // get current date (year/month/day)
      const today = new Date()
      const day = today.getDate()
      const month = today.getMonth() + 1
      const year = today.getFullYear()
      const hours = today.getHours()
      const minutes =
        today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
      // format date
      const date = day + "/" + month + "/" + year + "/" + hours + ":" + minutes

      store
        .append("Leads", [
          {
            Name: values.name,
            City: values.city,
            Email: values.email,
            Phone: values.phone,
            Service: values.service,
            Company: values.company,
            Message: values.message,
            Get_Promo: values.get_promo === true ? "yes" : "no",
            Date_D_M_Y_Time: date,
          },
        ])
        .then(res => {
          console.log(res)
          setShowSubmitMsg(true)
        })
    }
  }

  // useForm to manage form state & activity
  const {
    values,
    isValid,
    errors,
    changeHandler,
    touched,
    showErrors,
    submitHandler,
  } = useForm(initialState, validations, submitContact)

  // set submit button style based on validation state
  const getSubmitButtonStyle = (isValid, showSubmitMsg) => {
    if (showSubmitMsg) {
      return "opacity-50 bg-teal-900"
    } else if (isValid) {
      return "opacity-100 focus:bg-teal-900 hover:bg-teal-700"
    } else {
      return "opacity-50"
    }
  }

  return (
    <div id="sales-form" className="w-full p-6 rounded-lg shadow-2xl bg-white">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-4">
          {/* Full Name */}
          <div className="relative w-full">
            <input
              id="full-name"
              onChange={changeHandler}
              autoComplete="off"
              value={values.name}
              type="text"
              name="name"
              placeholder="Full Name"
              className="peer"
            />
            <label
              htmlFor="name"
              className="absolute bg-white text-gray-600 pl-2 pr-1 transition-all left-2 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text pointer-events-none"
            >
              Full Name<span className="text-base text-pink-600">*</span>
            </label>
            {showErrors && errors.name && (
              <p className="text-pink-600 ml-2">{errors.name}</p>
            )}
          </div>

          {/* City */}
          <div className="relative w-full">
            <input
              id="city"
              onChange={changeHandler}
              autoComplete="off"
              value={values.city}
              type="text"
              name="city"
              placeholder="Your City"
              className="peer"
            />
            <label
              htmlFor="city"
              className="absolute bg-white text-gray-600 pl-2 pr-1 transition-all left-2 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text pointer-events-none"
            >
              City<span className="text-base text-pink-600">*</span>
            </label>
            {showErrors && errors.city && (
              <p className="text-pink-600 ml-2">{errors.city}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 sm:gap-4">
          {/* Email */}
          <div className="relative mt-6">
            <input
              id="email"
              onChange={changeHandler}
              autoComplete="off"
              value={values.email}
              type="email"
              name="email"
              placeholder="you@email.com"
              className="peer"
            />
            <label
              htmlFor="email"
              className="absolute bg-white text-gray-600 pl-2 pr-1 transition-all left-2 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text pointer-events-none"
            >
              Email Address
              <span className="text-base text-pink-600">*</span>
            </label>
            {showErrors && errors.email && (
              <p className="text-pink-600 ml-2">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="relative mt-6">
            <input
              id="phone"
              onChange={changeHandler}
              autoComplete="off"
              value={values.phone}
              type="text"
              name="phone"
              placeholder="phone"
              className="peer"
            />
            <label
              htmlFor="phone"
              className="absolute bg-white text-gray-600 pl-2 pr-1 transition-all left-2 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text pointer-events-none"
            >
              Phone Number<span className="text-base text-pink-600">*</span>
            </label>
            {showErrors && errors.phone && (
              <p className="text-pink-600 ml-2">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 md:gap-4 items-end">
          <div id="service" className="mt-6">
            <label htmlFor="service" className="ml-2 text-sm">
              Choose a Service
              <span className="text-base text-pink-600 cursor-text">*</span>
            </label>
            <select
              onChange={changeHandler}
              name="service"
              className="text-gray-600 bg-white"
            >
              <option value="default">-- Select Service --</option>
              <option value="transcription">Transcription</option>
              <option value="closed-captioning">Closed-Captioning</option>
              <option value="live-captioning">Live-Captions</option>
              <option value="translation">Translation</option>
            </select>
            {showErrors && errors.service && (
              <p className="text-pink-600 ml-2">{errors.service}</p>
            )}
          </div>

          {/* Company */}
          <div className="relative w-full mt-6">
            <input
              id="company"
              onChange={changeHandler}
              autoComplete="off"
              value={values.company}
              type="text"
              name="company"
              placeholder="Your Company"
              className="peer"
            />
            <label
              htmlFor="company"
              className="absolute bg-white text-gray-600 pl-2 pr-1 transition-all left-2 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text pointer-events-none"
            >
              Company
            </label>
            {/* included for spacing if service select error */}
            {showErrors && errors.service && (
              <p className="text-transparent ml-2 select-none cursor-default">
                {errors.service}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div id="message" className="mt-4">
          <label htmlFor="message" className="ml-2 text-sm">
            Message
          </label>
          <textarea
            onChange={changeHandler}
            value={values.message}
            rows="4"
            name="message"
            placeholder="Please share any questions or considerations"
            className="placeholder-gray-400 focus:placeholder-transparent py-2"
          ></textarea>
        </div>

        {/* Promotions */}
        <div className="flex items-center mt-5 justify-around">
          <div className="flex items-center justify-between">
            <input
              id="promotions"
              onChange={changeHandler}
              type="checkbox"
              name="get_promo"
              className="w-5 h-5 mr-4 text-teal-600 focus:ring-teal-500"
            />
            <label htmlFor="get_promo" className="text-sm">
              Receive email updates & special offers?
            </label>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button
            disabled={showSubmitMsg}
            type="submit"
            className={
              getSubmitButtonStyle(isValid, showSubmitMsg) +
              " w-full px-2 py-4 text-white font-bold bg-teal-600 rounded-md"
            }
          >
            Send Contact Info
          </button>

          {showSubmitMsg && isValid && (
            <div className="flex items-center justify-center border border-green-500 rounded-lg text-green-500 bg-green-100/50 p-2 mt-6">
              <CheckCircleIcon className="w-8 mr-4" />
              <p className="font-bold">Success, Contact Info Submitted!</p>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default SalesForm
