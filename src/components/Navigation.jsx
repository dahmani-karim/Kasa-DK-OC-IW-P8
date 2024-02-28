import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='nav'>
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to='/About'>A Propos</NavLink></li>
            </ul>
        </div>
    );
};

export default Navigation;