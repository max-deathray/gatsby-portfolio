import React from "react"
import "./layout.css"
import Resume from "../images/Petrey-McRae-RESUME.pdf"

import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div className="main-container">
    <header>
      <Link to="/">
        <h3 style={{ display: `inline`, color: `black` }}>McRae Petrey</h3>
      </Link>
      <ul className="header-links">
        <ListLink to="/">Home</ListLink>
        {/* <ListLink to="/about/">About</ListLink> */}
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <a href={Resume}>Resume</a>
      </ul>
    </header>

    {children}

    <footer
    // style={{
    //   // border: `solid 1px red`,
    //   // position: `absolute`,
    //   left: `0`,
    //   position: `fixed`,
    //   bottom: `0`,
    //   width: `100%`,
    //   height: `15vh`,
    //   backgroundColor: `#6cf`,
    //   zIndex: "-2",
    //   marginTop: `10px`,
    // }}
    />
  </div>
)
