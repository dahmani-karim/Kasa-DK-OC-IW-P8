//Banner for Home Page

import homeBanner from '../assets/img/homeBanner.png';

const BannerHome = () => {
    return (
        <div className='homeBanner'>
            <img src={homeBanner} alt="Photo de Falaise" />
            <h1 className='homeTitle'>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default BannerHome;