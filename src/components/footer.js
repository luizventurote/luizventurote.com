import React from 'react';
import PropTypes from 'prop-types';

import IconGithub from "../assets/github.svg";
import IconTwitter from "../assets/twitter.svg";
import IconLinkedin from "../assets/linkedin.svg";
import footerStyles from './styles/footer.module.css';

const Footer = ({ copyright, twitter, github, linkedin }) => (
    <footer className={footerStyles.footer}>
        <div className={footerStyles.social}>
            <a href={`https://twitter.com/${twitter}`} rel="noopener"><IconTwitter /></a>
            <a href={`https://github.com/${github}`} rel="noopener"><IconGithub /></a>
            <a href={`https://www.linkedin.com/in/${linkedin}`} rel="noopener"><IconLinkedin /></a>
        </div>
        <div className={footerStyles.copyright}>
            © {new Date().getFullYear()} {copyright}.
        </div>
    </footer>
)

Footer.propTypes = {
    copyright: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
}

Footer.defaultProps = {
    copyright: ``,
    github: ``,
    linkedin: ``,
    twitter: ``,
}

export default Footer;