import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle, siteAuthor }) => (
  <header
    style={{
      background: `#222`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem`,
        textAlign: `center`,
      }}
    >
      <h1 style={{ margin: 0, fontSize: "2rem" }}>
        <div
          style={{
            maxWidth: `150px`,
            margin: `1.25rem auto`,
          }}
        >
          <Image />
        </div>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteAuthor}
        </Link>
      </h1>
      <p style={{ padding: "0.3em", color: "white", fontFamily: "monospace" }}>
        Front End Developer
      </p>
    </div>
    <ul className="menu">
      <Link to="/">
        <li>About</li>
      </Link>
      <Link to="/work">
        <li>Work</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
    </ul>
    <br />
    <footer
      style={{
        fontFamily: "monospace",
        textAlign: "center",
        padding: "2.3em 0",
      }}
    >
      <a
        href="https://www.linkedin.com/in/coderprans"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="profiles">linkedIn</span>
      </a>
      <span> • </span>
      <a
        href="https://github.com/CoderPrans"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="profiles">github</span>
      </a>
      <span> • </span>
      <a
        href="https://twitter.com/coderprans"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="profiles">twitter</span>
      </a>
    </footer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
