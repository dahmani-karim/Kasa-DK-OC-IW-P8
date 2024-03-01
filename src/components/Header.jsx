//Header component

import LogoHeader from './LogoHeader';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className='header'>
            <LogoHeader />
            <Navigation />
        </header>
    );
};

export default Header;