import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
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
      <h1 style={{ margin: 0, fontSize: "2.75rem" }}>
        <div
          style={{
            maxWidth: `150px`,
            margin: `1.45rem auto`,
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
          {siteTitle}
        </Link>
      </h1>
      <p style={{ padding: "0.3em", color: "white", fontFamily: "monospace" }}>
        Front End Developer
      </p>
    </div>
    <ul className="menu">
      <Link to="/work">
        <li>Work</li>
      </Link>
      <Link to="/">
        <li>About</li>
      </Link>
      <Link to="/page-2">
        <li>Contact</li>
      </Link>
    </ul>
    <br />
    <footer
      style={{
        color: "white",
        fontFamily: "monospace",
        textAlign: "center",
      }}
    >
      <a href="https://www.facebook.com/coderprans" target="_blank">
        <span>facebook</span>
      </a>{" "}
      •{" "}
      <a href="https://github.com/CoderPrans" target="_blank">
        <span>github</span>
      </a>{" "}
      •{" "}
      <a href="https://twitter.com/coderprans" target="_blank">
        <span>twitter</span>
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
