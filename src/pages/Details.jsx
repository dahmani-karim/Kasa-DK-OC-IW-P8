//Details of lodging

import Carrousel from "../components/Carrousel";
import Infos from "../components/Infos";
import Dropdown from "../components/Dropdown";

const Details = () => {
    return (
        <div className="details">
            <Carrousel />
            <Infos />
            <div className="InfosSupp">
                <Dropdown />
            </div>
        </div>
    );
};

export default Details;