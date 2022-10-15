import React from "react";
import './NavBar.css';
import logo from '../../img/logo.svg'
import { Icon } from '@iconify/react';

function NavBar () {
    return (
        <div className="navbar">
            <img src={logo} />
            {/* <div className="center-text">
                <h3>Your all in one links solution</h3>
                <hr></hr>
            </div> */}
            <a href="https://github.com/fjosue4/shortQR" target="_blank"><Icon icon="akar-icons:github-fill" className="header-icon" /></a>
        </div>
    )
}

export default NavBar;