import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div>
      <h1>Say hi!</h1>

      <a
        href="mailto:mpetrey@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        mpetrey@gmail.com
      </a>

      <a href="https://github.com/max-deathray">
        <i className="fab fa-github fa-2x icons" />
      </a>

      <a href="https://www.linkedin.com/in/mcraepetrey/">
        <i className="fab fa-linkedin-in fa-2x icons" />
      </a>

      <a href="https://twitter.com/mpetrey">
        <i className="fab fa-twitter fa-2x icons" />
      </a>
    </div>
  </Layout>
)
