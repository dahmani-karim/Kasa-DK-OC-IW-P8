import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to='/About'>A Propos</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;