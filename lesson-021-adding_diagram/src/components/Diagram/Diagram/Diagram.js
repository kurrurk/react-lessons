import DiagramBar from "../DiagramBar/DiagramBar";
import Card from "../../UI/Card/Card";
import "./Diagram.css";

const Diagram = (props) => {
  const dataStesValues = props.dataSets.map((dataSet) => dataSet.value);
  const maxMonthCosts = Math.max(...dataStesValues);
  return (
    <Card className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </Card>
  );
};

export default Diagram;
