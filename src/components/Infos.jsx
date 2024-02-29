//Informations component for lodging in details pages

import { useParams } from 'react-router-dom';
import logements from '../data/logements';

const Infos = () => {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    return (
        <div className="Infos">
            <div className="infosLeft">
                <h2 className='detailTitle'>{logement.title}</h2>
                <p className='detailLocation'>{logement.location}</p>
            </div>
            <div className="infosRight">
                <p className='detailHost'>{logement.host.name}</p>
                <img className='pictureHost' src={logement.host.picture} />
            </div>
        </div>
    );
};

export default Infos;