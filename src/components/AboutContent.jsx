// Content of the About page

import PropTypes from 'prop-types';

const AboutContent = ({ about }) => {
    return (
        <div className="content">
            {about.map((about) => (
                <div key={about.id}>
                    <h2>{about.title}</h2>
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