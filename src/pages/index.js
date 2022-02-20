import * as React from "react"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <div className="flex justify-around items-center w-full h-40">
        <button className="btn btn-primary">Content</button>
        <button className="btn btn-secondary">Content</button>
        <button className="btn btn-accent">Content</button>
        <button className="btn btn-info">Content</button>
        <button className="btn btn-error">Content</button>
        <button className="btn btn-success">Content</button>
        <button className="btn btn-warning">Content</button>
        <button className="btn btn-link">Content</button>
        <button className="btn loading">Content</button>
        <button className="btn btn-ghost">Content</button>
      </div>
    </Layout>
  )
}

export default IndexPage
