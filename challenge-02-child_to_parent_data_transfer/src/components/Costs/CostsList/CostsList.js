import CostItem from "../CostItem/CostItem";
import Card from "../../UI/Card/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import "./CostsList.css";
import React, { useState } from "react";
const CostsList = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const yearChangeHandler = (year) => {
    console.log("Year: " + year);
    setSelectedYear(year);
  };

  return (
    <div>
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
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
    </div>
  );
};

export default CostsList;
