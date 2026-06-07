import CostForm from "../CostForm/CostForm";
import Card from "../../UI/Card/Card";
import "./NewCost.css";

const NewCost = () => {
  return (
    <Card className="new-cost">
      <CostForm />
    </Card>
  );
};

export default NewCost;
