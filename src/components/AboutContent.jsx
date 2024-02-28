// Content of the About page

import aboutContent from '../data/about.json';

const AboutContent = () => {
    return (
        <div className="content">
            <ul>
            <li>Fiabilité</li>
            <li>Respect</li>
            <li>Service</li>
            <li>Sécurité</li>
            </ul>
            {aboutContent.map((aboutContent, index) => (
                <div key={index} title={aboutContent.title}>
                {aboutContent.text}
                </div>
            ))}
        </div>
    );
};

export default AboutContent;