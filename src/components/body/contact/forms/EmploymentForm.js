import React, { useState } from "react"

import axios from "axios"

import { CheckCircleIcon } from "@heroicons/react/solid"

import { useForm } from "../../../utils/useForm"
import { isRequired, isEmail } from "../../../utils/validatorFunctions"

const ContactForm = () => {
  const [showSubmitMsg, setShowSubmitMsg] = useState(false)

  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    transcription: false,
    closed_captions: false,
    live_captions: false,
    translation: false,
    message: "",
  }

  const validations = [
    // name
    ({ first_name }) => isRequired(first_name) || { name: "Name is required" },
    // email
    ({ email }) => isEmail(email) || { email: "Format: 'you@example.com'" },
    ({ email }) => isRequired(email) || { email: "E-mail is required" },
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

      console.log(values)

      // form data
      const data = {
        First_Name: values.first_name,
        Last_Name: values.last_name,
        Email: values.email,
        Country: values.country,
        Transcription: values.transcription === true ? "yes" : "no",
        Closed_Captions: values.closed_captions === true ? "yes" : "no",
        Live_Captions: values.live_captions === true ? "yes" : "no",
        Translation: values.translation === true ? "yes" : "no",
        Message: values.message,
        Date_D_M_Y_Time: date,
      }

      console.log(data)

      // submit form data
      axios
        .post(
          "https://sheet.best/api/sheets/85827ea6-22b5-4e69-bf1c-5baa89ae91a0",
          data
        )
        .then(res => {
          console.log("finish")
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
    <div className="w-full p-6 rounded-lg shadow-2xl bg-white">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-4">
          {/* First Name */}
          <div className="relative w-full">
            <input
              id="first-name"
              onChange={changeHandler}
              autoComplete="off"
              value={values.first_name}
              type="text"
              name="first_name"
              placeholder="First Name"
              className="peer"
            />
            <label
              htmlFor="first_name"
              className="absolute bg-white text-gray-600 pl-2 pr-1 transition-all left-2 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text pointer-events-none"
            >
              First Name<span className="text-base text-pink-600">*</span>
            </label>
            {showErrors && errors.name && (
              <p className="text-pink-600 ml-2">{errors.name}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="relative w-full">
            <input
              id="last-name"
              onChange={changeHandler}
              autoComplete="off"
              value={values.last_name}
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="peer"
            />
            <label
              htmlFor="last_name"
              className="absolute bg-white text-gray-600 pl-2 pr-1 transition-all left-2 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text pointer-events-none"
            >
              Last Name<span className="text-base text-pink-600">*</span>
            </label>
            {showErrors && errors.last_name && (
              <p className="text-pink-600 ml-2">{errors.last_name}</p>
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

          {/* Country */}
          <div className="relative mt-6">
            <input
              id="country"
              onChange={changeHandler}
              autoComplete="off"
              value={values.country}
              type="text"
              name="country"
              placeholder="Country"
              className="peer"
            />
            <label
              htmlFor="country"
              className="absolute bg-white text-gray-600 pl-2 pr-1 transition-all left-2 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text pointer-events-none"
            >
              Country<span className="text-base text-pink-600">*</span>
            </label>
            {showErrors && errors.country && (
              <p className="text-pink-600 ml-2">{errors.country}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-4 items-end">
          {/* Services */}
          <div
            id="checkbox-list"
            className="flex flex-col items-left mt-6 justify-start space-y-3 p-4 border border-gray-300 rounded-lg text-gray-600"
          >
            <h2 className="text-black text-sm">
              What services can you provide?
              <span className="text-base text-pink-600">*</span>
            </h2>
            <div className="flex items-center">
              <input
                id="transcription-services"
                onChange={changeHandler}
                type="checkbox"
                name="transcription"
                className="w-5 h-5 mr-4 text-teal-600 focus:ring-teal-500 rounded-full"
              />
              <label htmlFor="transcription" className="text-sm">
                Transcription
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="closed-caption-services"
                onChange={changeHandler}
                type="checkbox"
                name="closed_captions"
                className="w-5 h-5 mr-4 text-teal-600 focus:ring-teal-500 rounded-full"
              />
              <label htmlFor="closed_captions" className="text-sm">
                Closed-Captions
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="live-caption-services"
                onChange={changeHandler}
                type="checkbox"
                name="live_captions"
                className="w-4 h-5 mr-4 text-teal-600 focus:ring-teal-500 rounded-full"
              />
              <label htmlFor="live_captions" className="text-sm">
                Live-Captions
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="translation-services"
                onChange={changeHandler}
                type="checkbox"
                name="translation"
                className="w-5 h-5 mr-4 text-teal-600 focus:ring-teal-500 rounded-full"
              />
              <label htmlFor="get_promo" className="text-sm">
                Translation
              </label>
            </div>
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

export default ContactForm
