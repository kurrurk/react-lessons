import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, {useState} from "react";

const CostItem = (props) => {    

    const [description, setDescription] = useState(props.description);

    const changeDescriptionHandler = () => {
        // description = 'Test text!!!';
        setDescription('Test text!!!'); // description = 'Test text!!!'; & CostIten(props);
        console.log(description); // отображает старое значение
    }

    return (
        <Card className="cost-item">
            <CostDate date={props.date} />
            <div className="cost-item__description">
                <h2>{description}</h2>
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