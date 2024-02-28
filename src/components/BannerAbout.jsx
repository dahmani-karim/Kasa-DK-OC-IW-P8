//Banner for About Page

import aboutBanner from '../assets/img/aboutBanner.png';

const BannerAbout = () => {
    return (
        <div className='aboutBanner'>
            <img src={aboutBanner} alt="Photo de montagnes" />
        </div>
    );
};

export default BannerAbout;