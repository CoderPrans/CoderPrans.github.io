import React from "react"
//import { Link } from "gatsby"
import astro from "../images/gatsby-astronaut.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const projects = [
  "dungeon kings",
  "anonymous webchat",
  "tictactoe",
  "react hooks todo",
  "the game of life",
  "calculator",
  "pomodoro",
  "local weather",
  "pomodoro goals",
  "wikipedia viewer",
  "feed reader",
]

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Portfolio</h1>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {projects.map(project => (
        <div style={{ margin: "20px" }}>
          <img
            style={{ borderRadius: "10px" }}
            src={astro}
            width="200"
            alt="dummy"
          />
          <p>{project}</p>
        </div>
      ))}
    </div>
  </Layout>
)

export default SecondPage
