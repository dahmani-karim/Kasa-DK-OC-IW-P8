//Details of lodging

import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";
import Infos from "../components/Infos";
import Rate from "../components/Rate";
import Dropdown from "../components/Dropdown";

const Details = () => {
    return (
        <div className="details">
            <Carrousel />
            <Infos />
            <div className="InfosSupp">
                <Tags />
                <Rate />
            </div>
            <div>
                <Dropdown />
            </div>
        </div>
    );
};

export default Details;