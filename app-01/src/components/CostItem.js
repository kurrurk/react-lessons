import "./CostItem.css";

function CostItem (props) {

    return (
        <div className="cost-item" >
            <div>{props.date.toDateString()}</div>
            <div className="cost-item__description">
                <h2>{props.description}</h2>
                <div className="cost-item__price">{props.ammount}€</div>
            </div>
        </div>
    );

}

export default CostItem;