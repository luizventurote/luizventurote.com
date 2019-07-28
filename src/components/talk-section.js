import React from "react"

import Styles from './styles/talk-section.module.css'

const TalkSection = ({ talkTitle, talkLink, talkDate, talkLocation}) => (
    <div className={Styles.content}>
        <time className={Styles.time}>{talkDate}</time>
        <h2 className={Styles.title}>
        <a href={talkLink} rel="noopener">{talkTitle}</a>
        </h2>
        <p className={Styles.description}>{talkLocation}</p>
    </div>
)

export default TalkSection