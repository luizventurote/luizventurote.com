import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, margin: `auto`, }}>
      <Image />
    </div>
    <p>Hi my name is Luiz Venturote. I'm a Magento front-end developer at <a href='https://www.imaginationmedia.com/' rel="noopener">Imagination Media</a>.</p>
    <p>I love internet and web development. I have worked with Wordpress and design for several years, creating layouts and applications. But now I am keeping the focus of my work in e-commerce development with Magento, creating themes and extensions and I got my first front-end certification in early 2016.</p>
    <p>I enjoy music, learning foreign languages and Bible. If you want to know more about me or on those issues, please contact me!</p>
  </Layout>
)

export default IndexPage
