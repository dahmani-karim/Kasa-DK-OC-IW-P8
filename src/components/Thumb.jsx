//Thumb component for lodging cards in the Gallery component

import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Thumb = ({ logements }) => {
    return (
        <div className="thumbs">
            {logements.map((logements) => (
                <div key={`routePaths${logements.id}`} className="thumb">
                    <NavLink to={`/details/${logements.id}`}>
                        <layer className='overlay'></layer>
                        <img src={logements.cover} alt={`${logements.title}`} />
                        <h2 key={`${logements.id}`}>{logements.title}</h2>
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

Thumb.propTypes = {
    logements: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          cover: PropTypes.string.isRequired,
        })
      ).isRequired,
};

export default Thumb;