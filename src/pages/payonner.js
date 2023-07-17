import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Styles from '../components/styles/page.module.css'

export default ({data}) => {
  return (
  <Layout>

    <SEO title="Verificação do Payoneer" />

    <h1 className={Styles.pageTitle}>Verificação do Payoneer</h1>
    <p>Meu nome: Luiz Alberto Binda Venturote</p>
    <p>Nome da empresa: Venturote Tecnologia LTDA</p>
    <p>E-mail: luiz@venturote.com</p>
    <p>Este site pertence e é operado por Luiz Alberto Binda Venturote.</p>

  </Layout>
)}