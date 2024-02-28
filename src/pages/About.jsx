//About Page

import BannerAbout from "../components/BannerAbout";
import AboutContent from "../components/AboutContent";
import about from '../data/about.json';

const About = () => {
    return (
        <div>
            <BannerAbout />
            <AboutContent about={about}/>
        </div>
    );
};

export default About;