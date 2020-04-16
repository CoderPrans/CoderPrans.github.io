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
        <br />I like making websites and PWAs that <br /> make life easier and
        people happy.
        <br />
        <Link to="/contact">Get Started</Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage
