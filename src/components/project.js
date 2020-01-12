import React from "react"
import astro from "../images/gatsby-astronaut.png"

const Project = ({ project }) => (
  <div className="project-card">
    <img style={{ borderRadius: "10px" }} src={astro} width="220" alt="dummy" />
    <p style={{ padding: "0 0 10px 0", margin: "0", textAlign: "center" }}>
      {project}
    </p>
  </div>
)

export default Project
