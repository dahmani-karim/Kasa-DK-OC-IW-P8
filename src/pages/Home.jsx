//Home Page

import homeBanner from '../assets/img/homeBanner.png';

const Home = () => {
    return (
        <div className='home'>
            <img src={homeBanner} alt="Photo de Falaise" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Home;