//Rating component to display the rating of the logement in details pages

import starActive from '../assets/img/starActive.svg';
import starInactive from '../assets/img/starInactive.svg';
import { useParams } from 'react-router-dom';
import logements from '../data/logements';

const Rate = () => {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    const totalStars = 5;

    let starsFull = [];
    let starsEmpty = [];

    for (let index = 0; index < logement.rating; index++) {
        starsFull.push(<img className="colorStars" key={index} src={starActive} alt="Étoile pleine" />);
    }

    for (let index = 0; index < (totalStars - logement.rating); index++) {
        starsEmpty.push(<img className="greyStars" key={index} src={starInactive} alt="Étoile vide" />);
    }

    return (
        <div className="rating">
            {starsFull}
            {starsEmpty}
        </div>
    );
};

export default Rate;