// Content of the About page

import PropTypes from 'prop-types';
import arrow from '../assets/img/arrow.svg';

const AboutContent = ({ about }) => {
    return (
        <div className="content">
            {about.map((about, index) => (
                <div key={index}>
                    <div className='collapse'>
                        <h2>{about.title}</h2>
                        <img src={arrow} alt="Flèche" />
                    </div>
                    <p>{about.text}</p>
                </div>
            ))}
        </div>
    );
};

AboutContent.propTypes = {
    about: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
      ).isRequired,
};

export default AboutContent;