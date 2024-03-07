//Details of lodging

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Carrousel from "../components/Carrousel";
import Infos from "../components/Infos";
import DropdownMenu from "../components/Collapse";
import logements from '../data/logements';

const Details = () => {

    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    const navigate = useNavigate();

    useEffect(() => {
        if (!logement) {
          navigate("/error");
        }
        }, [id, logement, navigate]
    ); // Vérifiez si location est défini avant d'accéder à ses propriétés
        
    if (!logement) {
        return null; // Ou affichez un composant d'erreur approprié
    }

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