import React, { useState } from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Mssg, setMssg] = useState("")

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="Name">Name</label>
        <br />
        <input type="text" />
        <label htmlFor="Email">Email</label>
        <br />
        <input type="text" />
        <label htmlFor="Mssg">How can I help !</label>
        <br />
        <textarea></textarea>
        <br />
        <input type="submit" />
      </form>
    </Layout>
  )
}

export default SecondPage
