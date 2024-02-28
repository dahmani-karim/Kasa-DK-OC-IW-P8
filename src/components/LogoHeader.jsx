import logo from '../assets/logo/logo.png';
import { Link } from 'react-router-dom';

const LogoHeader = () => {
    return (
        <div className='logo'>
            <Link to="/"><img src={logo} alt="Logo Kasa" /></Link>
        </div>
    );
};

export default LogoHeader;