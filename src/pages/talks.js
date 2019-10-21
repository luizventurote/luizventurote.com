import React from "react"
import TalkSection from "../components/talk-section"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Styles from '../components/styles/page.module.css'

export default ({data}) => {
  return (
  <Layout>

    <SEO title="Talks" />

    <h1 className={Styles.pageTitle}>Talks</h1>

    <TalkSection talkTitle={'Navegação Offline com Progressive Web App (PWA)'} talkLink={'https://youtu.be/OA3dDlQYruE'} 
    talkDate={'October 18, 2019'} talkLocation={'Dev Colatina meetup | Ifes - Campus Colatina. Colatina, ES - Brazil.'}></TalkSection>

    <TalkSection talkTitle={'Estratégias de conteúdo para e-commerce com Magento Page Builder'} talkLink={'https://speakerdeck.com/luizventurote/estrategias-de-conteudo-para-e-commerce-com-magento-page-builder'} 
    talkDate={'September 18, 2018'} talkLocation={'Meet Magento Brazil 2018 | São Paulo, SP - Brazil.'}></TalkSection>

    <TalkSection talkTitle={'Progressive Web Apps and Magento 2'} talkLink={'https://speakerdeck.com/luizventurote/progressive-web-apps-and-magento-2-meet-magento-brazil'} 
    talkDate={'October 31, 2017'} talkLocation={'Meet Magento Brazil 2017 | São Paulo, SP - Brazil.'}></TalkSection>

    <TalkSection talkTitle={'Progressive Web Apps and Magento 2'} talkLink={'https://speakerdeck.com/luizventurote/progressive-web-apps-and-magento-2'} 
    talkDate={'August 31, 2017'} talkLocation={'Magento SoFla Meetup | Boynton Beach, FL - USA.'}></TalkSection>

    <TalkSection talkTitle={'Desenvolvimento de lojas virtuais com Magento'} talkLink={'https://speakerdeck.com/luizventurote/desenvolvimento-de-lojas-virtuais-com-magento-1'} 
    talkDate={'October 21, 2016'} talkLocation={'Foz do Iguaçu, PR - Brazil.'}></TalkSection>

    <TalkSection talkTitle={'Controle de Versão com Git'} talkLink={'https://www.youtube.com/watch?v=Or7ccG2qa7Y&list=PLBzQU3U8iMRndBoeUhURmQf1aLhQExbP8'} 
    talkDate={'July 5, 2014'} talkLocation={'Ifes - Campus Colatina. Colatina, ES - Brazil.'}></TalkSection>
    
    <TalkSection talkTitle={'Responsive Web Design'} talkLink={'https://speakerdeck.com/luizventurote/responsive-web-design'} 
    talkDate={'December 3, 2013'} talkLocation={'Ifes - Campus Colatina. Colatina, ES - Brazil.'}></TalkSection>

  </Layout>
)}