import React, { useState } from "react"

import { CheckCircleIcon } from "@heroicons/react/solid"

import { useForm } from "../../../utils/useForm"
import {
  isRequired,
  isEmail,
  someCheckboxSelected,
} from "../../../utils/validatorFunctions"

// Stein library to send data to GoogleSheets
import SteinStore from "stein-js-client"
const store = new SteinStore(
  "https://api.steinhq.com/v1/storages/62b90055bca21f053ea0865c"
)

const EmploymentForm = () => {
  const [showSubmitMsg, setShowSubmitMsg] = useState(false)

  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    transcription: "transcription",
    closed_captions: "closed_captions",
    live_captions: "live_captions",
    translation: "translation",
    availability: "",
    experience: "",
    message: "",
  }

  const validations = [
    // First name
    ({ first_name }) =>
      isRequired(first_name) || { first_name: "First name is required" },
    // Last name
    ({ last_name }) =>
      isRequired(last_name) || { last_name: "Last name is required" },
    // Email
    ({ email }) => isEmail(email) || { email: "Format: 'you@example.com'" },
    ({ email }) => isRequired(email) || { email: "E-mail is required" },
    // Country
    ({ country }) => isRequired(country) || { country: "Country is required" },
    // Services
    ({ transcription, closed_captions, live_captions, translation }) =>
      someCheckboxSelected(
        transcription,
        closed_captions,
        live_captions,
        translation
      ) || { services: "Service(s) is required" },
    // Availability
    ({ availability }) =>
      isRequired(availability) || { availability: "Availability is required" },
    // Experience
    ({ experience }) =>
      isRequired(experience) || { experience: "Availability is required" },
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
        .append("Employment", [
          {
            First_Name: values.first_name,
            Last_Name: values.last_name,
            Email: values.email,
            Country: values.country,
            Transcription: values.transcription === true ? "YES" : "NO",
            Closed_Captions: values.closed_captions === true ? "YES" : "NO",
            Live_Captions: values.live_captions === true ? "YES" : "NO",
            Translation: values.translation === true ? "YES" : "NO",
            Availability: values.availability,
            Experience: values.experience,
            Message: values.message,
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
            {showErrors && errors.first_name && (
              <p className="text-pink-600 ml-2">{errors.first_name}</p>
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

        {/* Services */}
        <div className="grid md:grid-cols-2 md:gap-4">
          <div
            id="services-checkbox-list"
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
                className="w-5 h-5 mr-3 text-teal-600 focus:ring-teal-500 rounded-lg"
              />
              <label htmlFor="transcription" className="text-sm">
                Transcript-Editing
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="closed-caption-services"
                onChange={changeHandler}
                type="checkbox"
                name="closed_captions"
                className="w-5 h-5 mr-3 text-teal-600 focus:ring-teal-500 rounded-lg"
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
                className="w-4 h-5 mr-3 text-teal-600 focus:ring-teal-500 rounded-lg"
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
                className="w-5 h-5 mr-3 text-teal-600 focus:ring-teal-500 rounded-lg"
              />
              <label htmlFor="get_promo" className="text-sm">
                Translation
              </label>
            </div>
            {showErrors && errors.services && (
              <p className="text-pink-600">{errors.services}</p>
            )}
          </div>

          {/* Availability + Experience */}
          <div
            id="experience-&-availability"
            className="mt-6 flex flex-col justify-between"
          >
            {/* Availability */}
            <div
              id="availability"
              onChange={changeHandler}
              className="p-4 text-sm text-gray-600 border border-gray-300 rounded-lg"
            >
              <h1 className="text-black">
                Availability
                <span className="text-base text-transparent pointer-events-none select-none">
                  *
                </span>
              </h1>
              <div className="flex flex-col justify-start mt-3 sm:flex-row align-center">
                <div className="mr-5">
                  <input
                    type="radio"
                    value="part-time"
                    id="part-time"
                    name="availability"
                    className="w-4 mr-2 text-teal-600 rounded-full"
                  />{" "}
                  <label htmlFor="part-time">Part-Time</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="full-time"
                    id="full-time"
                    name="availability"
                    className="w-4 mt-3 mr-2 text-teal-600 rounded-full sm:mt-0"
                  />{" "}
                  <label htmlFor="full-time">Full-Time</label>
                </div>
              </div>
              {showErrors && errors.availability && (
                <p className="mt-2 text-base text-pink-600">
                  {errors.availability}
                </p>
              )}
            </div>

            {/* Experience */}
            <div
              id="experience"
              className="p-4 mt-6 text-sm text-gray-600 border border-gray-300 rounded-lg"
            >
              <h1 className="text-black">
                Experience (Years)
                <span className="text-base text-transparent pointer-events-none select-none">
                  *
                </span>
              </h1>
              <div className="flex justify-between mt-3 align-center">
                <div className="w-full">
                  <input
                    onChange={changeHandler}
                    type="range"
                    min="0"
                    max="10"
                    value={values.experience}
                    id="experience"
                    name="experience"
                    className="w-2/3 mr-2 rounded-full accent-teal-600"
                  />{" "}
                  <label htmlFor="experience">
                    {values.experience === "10"
                      ? values.experience + "+"
                      : values.experience}
                  </label>
                </div>
              </div>
              {showErrors && errors.experience && (
                <p className="mt-2 text-base text-pink-600">
                  {errors.experience}
                </p>
              )}
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
            rows="3"
            name="message"
            placeholder="Please share any questions or considerations"
            className="py-2 placeholder-gray-400 focus:placeholder-transparent"
          ></textarea>
        </div>

        {/* Button */}
        <div className="mt-4">
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
            <div className="flex items-center justify-center p-2 mt-6 text-green-500 border border-green-500 rounded-lg bg-green-100/50">
              <CheckCircleIcon className="w-8 mr-4" />
              <p className="font-bold">Success, Contact Info Submitted!</p>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default EmploymentForm
