import React from "react"

import { FaLinkedin } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"

import { LocationMarkerIcon } from "@heroicons/react/solid"
import { MailIcon } from "@heroicons/react/solid"
import { PhoneIcon } from "@heroicons/react/solid"

const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-navy">
        <div className="max-w-3xl mx-auto p-8 text-white grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4">
          <ul className="flex flex-col">
            <h1 className="mb-4 text-lg font-bold text-secondary">COMPANY</h1>
            <li className="flex items-center justify-start pb-3">
              <LocationMarkerIcon className="w-6 h-5 mr-2" />
              <p href="#">Toronto, Canada</p>
            </li>
            <li className="flex items-center justify-start pb-3">
              <MailIcon className="w-6 h-5 mr-2" />
              <p href="#">info@scribitz.com</p>
            </li>
            <li className="flex items-center justify-start pb-3">
              <PhoneIcon className="w-6 h-5 mr-2" />
              <p href="#">+1 (647) 973 6725</p>
            </li>
          </ul>
          <ul className="flex flex-col font-bold">
            <h1 className="mb-4 text-lg font-bold text-secondary">SERVICES</h1>
            <li className="pb-3">
              <a href="#" className="hover:text-red-400">
                Transcription
              </a>
            </li>
            <li className="pb-3">
              <a href="#" className="hover:text-red-400">
                Live-Transcription
              </a>
            </li>
            <li className="pb-3">
              <a href="#" className="hover:text-red-400">
                Closed Captions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400">
                Translation
              </a>
            </li>
          </ul>
          <div className="flex flex-col">
            <h1 className="mb-4 text-lg font-bold text-secondary">CONTACT</h1>
            <a href="#" className="pb-3">
              Phone
            </a>
            <a href="#" className="pb-3">
              Phone
            </a>
            <a href="#" className="pb-3">
              Phone
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-8 py-3 text-white bg-gray-800">
        <p>
          Scribitz Transcription <span>&#169; </span> {new Date().getFullYear()}
        </p>
        <div
          id="social-media-icons"
          className="flex items-center justify-between"
        >
          <a href="www.facebook.com">
            <FaFacebookSquare
              size="1.75em"
              className="ml-4 text-white hover:text-red-400"
            />
          </a>
          <a href="www.facebook.com">
            <FaTwitterSquare
              size="1.75em"
              className="ml-3 text-white hover:text-red-400"
            />
          </a>
          <a href="www.facebook.com">
            <FaLinkedin
              size="1.75em"
              className="text-white hover:text-red-400 ml-3"
            />
          </a>
          <a href="www.facebook.com"></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
