import React from 'react';
import stylesMenu from './styles/menu.module.css';
import { Link } from "gatsby";

class Menu extends React.Component {

    state = {
        showMenu: false
    };

    toggleMenu = event => {
        event.preventDefault();
        
        if(this.state.showMenu) {
            this.setState({
                showMenu: false,
            });
        } else {
            this.setState({
                showMenu: true,
            });
        }
    }

    // TODO: Add the right accessibility attribute to handle the toggle menu
    render() {
        return(
            <div className={stylesMenu.menu}>
            <button onClick={this.toggleMenu} className={stylesMenu.trigger}><span>Main Menu</span></button>
            <div className={stylesMenu.container + ' ' + (this.state.showMenu ? stylesMenu.active : '')}>
                <button onClick={this.toggleMenu} className={stylesMenu.closeTrigger}><span>Close Menu</span></button>
                <ul>
                    <li><Link to='/talks'>Talks</Link></li>
                    <li><a href='mailto:luiz@imaginationmedia.com'>Contact</a></li>
                </ul>
            </div>
            { (this.state.showMenu) ? <div onClick={this.toggleMenu} className={stylesMenu.overlay}></div> : null }
        </div>
        );
    }
}

export default Menu;