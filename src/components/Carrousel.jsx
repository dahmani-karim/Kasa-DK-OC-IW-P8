// Carrousel for Details of lodging pages

//import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import logements from '../data/logements';
import arrowLeft from '../assets/img/arrowLeft.svg';
import arrowRight from '../assets/img/arrowRight.svg';

const Carrousel = () => {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    const totalPictures = logement.pictures.length;
    
    let portfolio = [];
    //const currentPicture = portfolio[0];

    for (let index = 0; index < totalPictures; index++) {
        portfolio.push(logement.pictures[index]);
    }

    return (
        <div className='carrousel' key={logement.id}>
            <div className="carrouselNav">
                <img className='arrow arrowLeft' src={arrowLeft} alt="Flèche gauche" />
                <img className='arrow arrowRight' src={arrowRight} alt="Flèche droite" />
            </div>
            
            {portfolio.map((picture, index) => (
                <>
                    <div className="slide-indicator">
                        {`${index + 1}/${logement.pictures.length}`}
                    </div>
                    <img className='pictures' key={index} src={picture} alt="Photos du logement" />
                </>
            ))}
        </div>
    );
};

/*
Carrousel.propTypes = {
    logements: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            pictures: PropTypes.arrayOf(PropTypes.string.isRequired),
        })
    ).isRequired,
};
*/

export default Carrousel;