import React from "react"

const ServicesDropdown = React.forwardRef((services, serviceRef) => {
  return (
    <div
      id="dropdown"
      onClick={e => e.stopPropagation()}
      ref={serviceRef}
      className={`${
        services.services ? "" : "opacity-0 invisible"
      } absolute left-0 top-14 transition-opacity duration-300`}
    >
      <div id="services-dropdown rounded">
        <ul className="text-primary bg-slate-100 rounded">
          <li className="p-6 hover:bg-slate-200 border-b border-primary hover:rounded-t">
            Transcription
          </li>
          <li className="p-6 hover:bg-slate-200 border-b border-primary">
            Closed&#8209;Captioning
          </li>
          <li className="p-6 hover:bg-slate-200 border-b border-primary">
            Live&#8209;Captioning
          </li>
          <li className="p-6 hover:bg-slate-200 hover:rounded-b">
            Translation
          </li>
        </ul>
      </div>
    </div>
  )
})

export default ServicesDropdown
