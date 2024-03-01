//Footer component

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <Link to="/"><img className='logoFooter' src="/src/assets/logo/logowhite.png" alt="Logo Kasa blanc" /></Link>
            <p className='mention'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;