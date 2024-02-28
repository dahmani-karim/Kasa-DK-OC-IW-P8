//Gallery for Home Page

import Thumb from './Thumb';
import logements from '../data/logements.json';

const Gallery = () => {
    return (
        <div className='gallery'>
            <Thumb logements={logements}/>
        </div>
    );
};

export default Gallery;