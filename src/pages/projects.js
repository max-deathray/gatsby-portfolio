import React from "react"
import Layout from "../components/layout"
import Tigerwines from "../images/tigerwines-sm.jpg"
import Codelingo from "../images/codelingo-sm.jpg"
import Vibetribe from "../images/vibetribe-sm.jpg"
import ProjectStyles from "../components/projects.module.css"

console.log(ProjectStyles)

export default () => (
  <Layout>
    <h1>Projects</h1>
    <p>A few of my recent projects:</p>

    <div className="album py-5 bg-light">
      <div className="container">
        <div style={{ display: `flex` }}>
          <div className="project">
            <a
              href="https://www.codelingoapp.com/"
              className="no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card mb-4 shadow-sm hover">
                <img
                  className="screenshot
                "
                  src={Codelingo}
                  alt="project screenshot"
                  style={{ maxWidth: `30vw`, margin: `5px` }}
                />
                <div className="card-body">
                  <h6>Vibe Tribe</h6>
                  <p className="card-text">
                    Pinterest clone built with GraphQL.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="project">
            <a
              href="https://github.com/max-deathray/tribute-react-apollo"
              className="no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card mb-4 shadow-sm hover">
                <img
                  className="screenshot
                  "
                  src={Vibetribe}
                  alt="project screenshot"
                />
                <div className="card-body">
                  <h6>Vibe Tribe</h6>
                  <p className="card-text">
                    Pinterest clone built with GraphQL.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="project">
            <a
              href="http://tigerwines.herokuapp.com/"
              className="no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card mb-4 shadow-sm hover">
                <img
                  className="screenshot"
                  src={Tigerwines}
                  alt="project screenshot"
                />
                <div className="card-body">
                  <h6>Tiger Wines</h6>
                  <p className="card-text">
                    E-Commerce SPA built in a team of four.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
