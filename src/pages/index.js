import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Styles from '../components/styles/page.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={Styles.indexContent}>
      <div style={{ maxWidth: `300px`, margin: `auto`, }}>
        <Image />
      </div>
      <p>Hi, I'm Luiz Venturote.</p>
      <p>I'm a UI/UX designer and front-end developer at <a href='https://www.imaginationmedia.com/' rel="noopener">Imagination Media</a>, a Magento Partner agency based in Florida. I'm responsible for e-commerce development using Magento, Salesforce Commerce Cloud and other cool platforms with a recent focus on modern Javascript.</p>
      <p>I live in a little town in Brazil where I organize a <a href='https://meetup.com/dev-colatina/' rel="noopener">meetup about software development</a>. I have three <a href='https://u.magento.com/certification/directory/dev/2261168/' rel="noopener">Magento certifications</a> and graduated with a degree in Information Systems at <a href='http://ifes.edu.br/' rel="noopener">Ifes</a>.</p>
      <p>I enjoy music, learning foreign languages and Bible.</p>
    </div>
  </Layout>
)

export default IndexPage