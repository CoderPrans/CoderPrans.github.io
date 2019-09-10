import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <div className="intro" style={{}}>
      <h1>👋 Hello </h1>
      <p>
        Hey, I'm <b>Pranav Bhaskar</b>,
        <br />I like making websites and progressive web apps that make this
        world a better place. <br />
        <Link to="/contact">Contact</Link> for freelance work.
      </p>
    </div>
  </Layout>
)

export default IndexPage
