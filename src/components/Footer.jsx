//Footer component

import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <footer className='footer'>
            <Link to="/"  onClick={scrollToTop}>
                <img className='logoFooter' src="/src/assets/logo/logowhite.png" alt="Logo Kasa blanc" />
            </Link>
            <p className='mention'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;