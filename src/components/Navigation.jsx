import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='nav'>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to='/About'>A Propos</Link></li>
            </ul>
        </div>
    );
};

export default Navigation;