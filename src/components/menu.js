import React from 'react';
import stylesMenu from './styles/menu.module.css';

export default Menu => (
    <div className={stylesMenu.menu}>
        <button className={stylesMenu.trigger}><span></span></button>
        <div className={stylesMenu.container}>
            <ul>
                <li>Talks</li>
                <li>Blog</li>
                <li>Projects</li>
                <li>Certifications</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
)