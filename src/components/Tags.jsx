//Tags component for lodgings in the details pages

import { useParams } from 'react-router-dom';
import logements from '../data/logements';

const Tags = () => {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    return (
        <div className="tags">
            {logement.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
            ))}
        </div>
    );
};

export default Tags;