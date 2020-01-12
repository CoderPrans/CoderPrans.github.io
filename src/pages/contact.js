import React, { useState } from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mssg, setMssg] = useState("")

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          clickSend({ name, email, mssg })
          setName("")
          setEmail("")
          setMssg("")
        }}
      >
        <label htmlFor="Name">NAME</label>
        <br />
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          name="name"
          type="text"
          required
        />
        <label htmlFor="Email">EMAIL</label>
        <br />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          required
        />
        <label htmlFor="Mssg">HOW CAN I HELP ?</label>
        <br />
        <textarea
          value={mssg}
          onChange={e => setMssg(e.target.value)}
        ></textarea>
        <input type="submit" />
      </form>
    </Layout>
  )
}

const clickSend = ({ name, email, mssg }) => {
  console.log(name, email, mssg)
  console.log(typeof name, typeof email, typeof mssg)
  const content = `<h2>Message</h2><b>Name: ${name}</b><br /><b>Email: ${email}</b><br /><p>${mssg}</p>`

  const bodyEncoded = new URLSearchParams()
  bodyEncoded.append("from_email", email)
  bodyEncoded.append("to_email", "pranavbhaskar17@gmail.com")
  bodyEncoded.append("subject", "contact from website")
  bodyEncoded.append("content", content)

  fetch(
    "https://wt-4896982400a54bf82243b9417c45f1ea-0.sandbox.auth0-extend.com/sendgrid_Patanjali",
    {
      method: "POST",
      body: bodyEncoded,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  )
    .then(res => {
      console.log(res)
      alertRes(res)
    })
    .catch(err => console.log(err))
}

const alertRes = res =>
  res.statusText === "OK"
    ? alert("Hurray!\nmessage sent succesfully")
    : alert("Oops!\nsomething's wrong. Please try again")

export default ContactPage
