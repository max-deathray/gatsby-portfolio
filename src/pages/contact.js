import React from "react"
import Layout from "../components/layout"
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa/"

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
      <div className="contact-icons">
        <a href="https://github.com/max-deathray">
          <FaGithub style={{ fontSize: `36` }} className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/mcraepetrey/">
          <FaLinkedinIn style={{ fontSize: `36` }} className="icons" />
        </a>
        <a href="https://twitter.com/mpetrey">
          <FaTwitter style={{ fontSize: `36` }} className="icons" />
        </a>
      </div>
    </div>
  </Layout>
)
