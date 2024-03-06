//Informations component for lodging in details pages

// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import logements from '../data/logements';
import Tags from './Tags';
import Rate from './Rate';

const Infos = () => {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    return (
        <div className="Infos">
            <div className="infosLeft">
                <h1 className='detailTitle'>{logement.title}</h1>
                <h2 className='detailLocation'>{logement.location}</h2>
                <Tags />
            </div>
            <div className="Infos2">
                <div className="infosRight">
                    <p className="detailHost">{logement.host.name}</p>
                    <img className="pictureHost" src={logement.host.picture} />
                </div>
                <div className="rating">
                    <Rate />
                </div>
            </div>
        </div>
    );
};

// Infos.propTypes = {
//     logements: PropTypes.arrayOf(
//         PropTypes.shape({
//           id: PropTypes.string.isRequired,
//           title: PropTypes.string.isRequired,
//           location: PropTypes.string.isRequired,
//         })
//       ).isRequired,
// };

export default Infos;