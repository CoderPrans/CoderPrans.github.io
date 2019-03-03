import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello People</h1>
    <p>This is my website</p>
  </Layout>
)

export default IndexPage
