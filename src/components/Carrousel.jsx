// Carrousel for Details of lodging pages

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements';
import arrowLeft from '../assets/img/arrowLeft.svg';
import arrowRight from '../assets/img/arrowRight.svg';

const Carrousel = () => {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    const totalPictures = logement.pictures.length;
    
    let portfolio = [];

    for (let index = 0; index < totalPictures; index++) {
        portfolio.push(logement.pictures[index]);
    }
    
    const [indicator, setIndicator] = useState(1);

    const slideLeft = () => {
        //si l'index est égal à 0, on passe à la dernière slide
        setIndicator((prevIndex) => (prevIndex === 1 ? totalPictures : prevIndex - 1));
    };
      
    const slideRight = () => {
        //si l'index est égal à la dernière slide, on passe à la première
        setIndicator((prevIndex) => (prevIndex === totalPictures ? 1 : prevIndex + 1));
    };

    const showArrowAndIndicator = totalPictures > 1;

    return (
        <div className='carrousel' key={logement.id}>
            {showArrowAndIndicator && (
                <div className="carrouselNav">
                <img className='arrow arrowLeft' src={arrowLeft} alt="Flèche gauche" onClick={slideLeft}/>
                <img className='arrow arrowRight' src={arrowRight} alt="Flèche droite" onClick={slideRight}/>
            </div>
            )}
            {showArrowAndIndicator && (
            <div className="slide-indicator">
                        {`${indicator}/${totalPictures}`}
            </div>
            )}
            <img className='pictures' src={portfolio[indicator-1]} alt="Photos du logement" />
        </div>
    );
};

export default Carrousel;