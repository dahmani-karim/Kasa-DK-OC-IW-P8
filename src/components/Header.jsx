// Code: Header component

import logo from '../assets/logo/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="Logo Kasa" />
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to='/About'>A Propos</Link></li>
            </ul>
        </div>
    );
};

export default Header;