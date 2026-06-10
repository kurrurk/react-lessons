import CostForm from "../CostForm/CostForm";
import Card from "../../UI/Card/Card";
import "./NewCost.css";

const NewCost = (props) => {
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };

  return (
    <Card className="new-cost">
      <CostForm onSaveCostData={saveCostDataHandler} />
    </Card>
  );
};

export default NewCost;
