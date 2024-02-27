// Code: Footer component

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <Link to="/"><img src="/src/assets/logo/logowhite.png" alt="Logo Kasa blanc" /></Link>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;