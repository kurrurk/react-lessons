import CostDate from "../CostDate/CostDate";
import Card from "../../UI/Card/Card";
import "./CostItem.css";
import React, { useState } from "react";

const CostItem = (props) => {
  const [description, setDescription] = useState(props.description);

  const changeDescriptionHandler = () => {
    setDescription("New cost"); // description = 'New Cost' и перезапуск компонента CostItem(props);
    console.log(description); // события объновляются не сразу потому в консоле появляются старые значения
  };

  return (
    <Card className="cost-item">
      {/* всегда должен быть корневой элемент. */}
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">€{props.amount}</div>
      </div>
      <button
        className="btn btn-primary ml-2"
        onClick={changeDescriptionHandler}
      >
        Изменить Описание
      </button>
    </Card>
  );
};

export default CostItem;
