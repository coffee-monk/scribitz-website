import React from "react"

const Dropdown = () => {
  return (
    <div id="dropdown" className="flex flex-col absolute left-0 top-14">
      <div id="dropdown-menu rounded">
        <ul className="text-primary bg-slate-100 rounded">
          <li className="p-6 hover:bg-slate-200 border-b border-primary hover:rounded-t">
            Transcription
          </li>
          <li className="p-6 hover:bg-slate-200 border-b border-primary">
            Captions
          </li>
          <li className="p-6 hover:bg-slate-200 border-b border-primary">
            Live-Transcription
          </li>
          <li className="p-6 hover:bg-slate-200 hover:rounded-b">
            Translation
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
