import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <div className="intro" style={{}}>
      <h1>
        <span role="img" aria-label="waving hand">
          👋
        </span>
        Hello
      </h1>
      <p>
        Hey, I'm <b>Pranav Bhaskar</b>,
        <br />I like making websites and apps that <br /> makes life easier and
        meaningful.
        <br />
        <Link to="/contact">Hire me</Link> for freelance work.
      </p>
    </div>
  </Layout>
)

export default IndexPage
