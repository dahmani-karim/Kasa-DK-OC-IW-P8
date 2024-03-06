//About Page

import BannerAbout from "../components/BannerAbout";
import DropdownMenu from "../components/Collapse";
import about from '../data/about.json';

const About = () => {
    return (
        <div className="about">
            <BannerAbout />
            {about.map((about, index) => (
                <DropdownMenu key={index} title={about.title} info={about.text}/>
            ))}
        </div>
    );
};

export default About;