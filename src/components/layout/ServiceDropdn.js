import React from "react"

const ServicesDropdown = React.forwardRef((props, servicesRef) => {
  return (
    <div
      onClick={e => e.stopPropagation()}
      ref={servicesRef}
      id="dropdown"
      className="flex flex-col absolute left-0 top-14"
    >
      <div
        id="dropdown-menu"
        className="transition-opacity duration-1000 ease-in"
      >
        <ul className="text-primary bg-slate-100 rounded">
          <li className="p-6 hover:bg-slate-200 border-b border-primary hover:rounded-t">
            Transcription
          </li>
          <li className="p-6 hover:bg-slate-200 border-b border-primary">
            Captions
          </li>
          <li className="p-6 hover:bg-slate-200 border-b border-primary">
            Live-Captions
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
