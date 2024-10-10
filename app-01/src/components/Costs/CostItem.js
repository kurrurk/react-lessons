import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = (props) => {    

    const changeDescriptionHandler = () => {
        console.log('Click texs!!!')
    }

    return (
        <Card className="cost-item">
            <CostDate date={props.date} />
            <div className="cost-item__description">
                <h2>{props.description}</h2>
                <div className="cost-item__price">{props.ammount}€</div>                                
            </div>
            <button 
                onClick={changeDescriptionHandler}
            >
                Beschreibung ändern
            </button>
        </Card>
    );

}

export default CostItem;