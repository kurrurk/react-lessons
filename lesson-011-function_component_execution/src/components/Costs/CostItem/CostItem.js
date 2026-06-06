import CostDate from "../CostDate/CostDate";
import Card from "../../UI/Card/Card";
import "./CostItem.css";

const CostItem = (props) => {
  let description = props.description;

  const changeDescription = (props) => {
    description = "New text!";
  };

  return (
    <Card className="cost-item">
      {/* всегда должен быть корневой элемент. */}
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">€{props.amount}</div>
      </div>
      <button className="btn btn-primary ml-2" onClick={changeDescription}>
        Изменить Описание
      </button>
    </Card>
  );
};

export default CostItem;
