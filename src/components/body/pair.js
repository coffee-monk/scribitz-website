import React from "react"
import Card from "./card"

const Pair = () => {
  const pairProps = {
    titleLeft: "99% ACCURACY",
    phraseLeft: "Powered by human experts to deliver the best quality",
    titleRight: "COMPLIANCE",
    phraseRight: "WCAG 3.0 compliant - AODA & ADA, FCC compliance guaranteed",
  }

  return (
    <div class="flex flex-col w-full lg:flex-row">
      <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        <Card />
      </div>
      <div class="divider lg:divider-horizontal"></div>
      <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        <Card />
      </div>
    </div>
  )
}

export default Pair
