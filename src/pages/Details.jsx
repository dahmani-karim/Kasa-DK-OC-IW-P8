//Details of lodging

import { useParams } from 'react-router-dom';
import Carrousel from "../components/Carrousel";
import Infos from "../components/Infos";
import DropdownMenu from "../components/Collapse";
import logements from '../data/logements';

const Details = () => {

    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    return (
        <div className="details">
            <Carrousel />
            <Infos />
            <div className="InfosSupp">
                <DropdownMenu title="Description" info={logement.description} />
                <DropdownMenu
                    title="Équipements"
                    info={logement.equipments.map((equipment, index) => (
                        <div key={index}>
                            <p>{equipment}</p>
                        </div>
                    ))}
                />
                
            </div>
        </div>
    );
};

export default Details;