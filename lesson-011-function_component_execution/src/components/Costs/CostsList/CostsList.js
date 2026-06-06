import CostItem from "../CostItem/CostItem";
import Card from "../../UI/Card/Card";
import "./CostsList.css";
const CostsList = (props) => {
  return (
    <Card className="costs">
      <CostItem
        date={props.costs[0].date}
        description={props.costs[0].description}
        amount={props.costs[0].amount}
      ></CostItem>
      <CostItem
        date={props.costs[1].date}
        description={props.costs[1].description}
        amount={props.costs[1].amount}
      ></CostItem>
      <CostItem
        date={props.costs[2].date}
        description={props.costs[2].description}
        amount={props.costs[2].amount}
      ></CostItem>
    </Card>
  );
};

export default CostsList;
