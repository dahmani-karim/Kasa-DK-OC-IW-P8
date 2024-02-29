//Details of lodging

//import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";
import Infos from "../components/Infos";
import Rate from "../components/Rate";

const Details = () => {
    return (
        <div className="details">
            {/* <Carrousel /> */}
            <Infos />
            <div className="InfosSupp">
                <Tags />
                <Rate />
            </div>
            <div>
                <p>Description</p>
                <p>Equipements</p>
            </div>
        </div>
    );
};

export default Details;