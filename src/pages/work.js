import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

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
  "extrasave",
]

const SecondPage = () => (
  <Layout>
    <SEO title="Work" />
    <h1>Portfolio</h1>
    <div className="showcase" style={{}}>
      {projects.map(project => (
        <Project project={project} />
      ))}
    </div>
  </Layout>
)

export default SecondPage
