import { Link } from "gatsby"
import React, { useState } from "react"

const SlidingMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openNav = () => {
    setIsOpen(true)
  }

  const closeNav = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        style={{
          position: "absolute",
          color: "white",
          background: "#222",
          border: "none",
          fontSize: "30px",
          padding: "15px",
          cursor: "pointer",
        }}
        onClick={openNav}
      >
        &#9776;
      </button>
      <div
        id="sliding-menu"
        style={{
          height: "100%",
          width: `${isOpen ? "300px" : "0"}`,
          position: "fixed",
          zIndex: 1,
          top: 0,
          left: 0,
          background: "#222",
          overflowX: "hidden",
          transition: "0.5s",
        }}
      >
        <button
          style={{
            position: "absolute",
            color: "white",
            background: "#222",
            border: "none",
            fontSize: "30px",
            padding: "15px",
            cursor: "pointer",
          }}
          onClick={closeNav}
        >
          X
        </button>
        <div
          style={{
            paddingTop: "60px",
          }}
        >
          <ul
            className="menu"
            style={{
              whiteSpace: "nowrap",
            }}
          >
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
              whiteSpace: "nowrap",
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
        </div>
      </div>
    </>
  )
}

export default SlidingMenu
