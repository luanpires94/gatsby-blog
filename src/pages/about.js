import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from '../components/About'

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <About />
    <Link to="/" className="backLink">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
