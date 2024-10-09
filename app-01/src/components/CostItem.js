import './CostItem.css'

function CostItem () {

    const costDate = new Date(2024, 2, 15);
    const costDescription = "Холодильник";
    const costAmmount = "999.99";

    return (

        <div className="cost-item">
            <div>{costDate.toDateString()}</div>
            <div className="cost-item__description">
                <h2>{costDescription}</h2>
                <div className="cost-item__price">{costAmmount}€</div>
            </div>
        </div>

    );

}

export default CostItem;