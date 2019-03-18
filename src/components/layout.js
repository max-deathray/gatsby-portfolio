import React from "react"

import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: `95vw`, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem`, borderBottom: `solid 1px grey` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline`, color: `black` }}>McRae Petrey</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>

    {children}

    <footer
      style={{
        // border: `solid 1px red`,
        position: `absolute`,
        left: `0`,
        potition: `fixed`,
        bottom: `0`,
        width: `100%`,
        height: `15vh`,
        backgroundColor: `#6cf`,
      }}
    />
  </div>
)
