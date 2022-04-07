import React from "react"

const ServicesDropdown = React.forwardRef((props, serviceRef) => {
  return (
    <div
      onClick={e => e.stopPropagation()}
      ref={serviceRef}
      id="dropdown"
      className="flex flex-col absolute left-0 top-14"
    >
      <div id="dropdown-menu rounded">
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
