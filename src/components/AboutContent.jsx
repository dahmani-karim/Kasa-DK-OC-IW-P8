// Content of the About page

import { useState } from 'react';
import PropTypes from 'prop-types';
import arrow from '../assets/img/arrow.svg';

const AboutContent = ({ about }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = (e) => {
        e.target=setIsOpen(!isOpen);
    };

    return (
        <div className="content">
            {about.map((about, index) => (
                <div key={index}>
                    <div className='collapse'>
                        <h2>{about.title}</h2>
                        <img  onClick={(e)=>toggleCollapse(e)} src={arrow} alt="Flèche" />
                    </div>
                    {isOpen && <p>{about.text}</p>}
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