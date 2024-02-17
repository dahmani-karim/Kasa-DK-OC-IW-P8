import React from 'react';
import logo from '../assets/logo/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="Logo Kasa" />
            <ul>
                <li>Accueil</li>
                <li>A Propos</li>
            </ul>
        </div>
    );
};

export default Header;