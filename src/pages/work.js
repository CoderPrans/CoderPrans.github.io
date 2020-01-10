import React from "react"
//import { Link } from "gatsby"
import astro from "../images/gatsby-astronaut.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Portfolio</h1>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ margin: "20px" }}>
        <img
          style={{ borderRadius: "10px" }}
          src={astro}
          width="200"
          alt="dummy"
        />
      </div>
      <div style={{ margin: "20px" }}>
        <img
          style={{ borderRadius: "10px" }}
          src={astro}
          width="200"
          alt="dummy"
        />
      </div>
      <div style={{ margin: "20px" }}>
        <img
          style={{ borderRadius: "10px" }}
          src={astro}
          width="200"
          alt="dummy"
        />
      </div>
      <div style={{ margin: "20px" }}>
        <img
          style={{ borderRadius: "10px" }}
          src={astro}
          width="200"
          alt="dummy"
        />
      </div>
      <div style={{ margin: "20px" }}>
        <img
          style={{ borderRadius: "10px" }}
          src={astro}
          width="200"
          alt="dummy"
        />
      </div>
      <div style={{ margin: "20px" }}>
        <img
          style={{ borderRadius: "10px" }}
          src={astro}
          width="200"
          alt="dummy"
        />
      </div>
      <div style={{ margin: "20px" }}>
        <img
          style={{ borderRadius: "10px" }}
          src={astro}
          width="200"
          alt="dummy"
        />
      </div>
    </div>
  </Layout>
)

export default SecondPage
