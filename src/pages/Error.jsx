// Error Page for 404 Not Found

import error from '../assets/img/404.png';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <img src={error} alt="404" />
            <h1>Oups! La page que vous demandez n&apos;existe pas.</h1>
            <p><Link to="/">Retourner sur la page d&apos;accueil</Link></p>
        </div>
    );
};

export default Error;