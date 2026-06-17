import CostForm from "../CostForm/CostForm";
import Card from "../../UI/Card/Card";
import "./NewCost.css";
import React, { useState } from "react";

const NewCost = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const cancelShowFormHandler = () => {
    setShowForm(false);
  };

  return (
    <Card className="new-cost">
      {!showForm && (
        <button onClick={showFormHandler}>Добавить новый расход</button>
      )}
      {showForm && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelShowFormHandler}
        />
      )}
    </Card>
  );
};

export default NewCost;
