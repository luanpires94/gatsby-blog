import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'


const IndexPage = () => (

  <Layout>
    <SEO title="About" />
    <PostItem 
      slug="/about/"
      background="#1fa1f2"
      category="Misc"
      date="September 23, 1994"
      timeToRead="5"
      title="lorem ipsum"
      description="lorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    />
  </Layout>
)

export default IndexPage
