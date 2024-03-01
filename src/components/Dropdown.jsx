//Components Dropdown for collapsis zone in details page and about page

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements';


const Dropdown = () => {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = (e) => {
        e.target=setIsOpen(!isOpen);
    };

    return (
        <div className='services'>
            <div className='block1'>
                <h3 onClick={(e)=>toggleCollapse(e)}>Description</h3>
                {isOpen && <p className='service'>{logement.description}</p>}
            </div>
            <div className='block2'>
                <h3 onClick={(e)=>toggleCollapse(e)}>Équipements</h3>
                {logement.equipments.map((equipment, index) => (
                    <div className='service' key={index}>
                        {isOpen && <p key={index}>{equipment}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;