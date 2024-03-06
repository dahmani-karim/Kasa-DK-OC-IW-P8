import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><NavLink to="/">ACCUEIL</NavLink></li>
                <li><NavLink to='/About'>A PROPOS</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;