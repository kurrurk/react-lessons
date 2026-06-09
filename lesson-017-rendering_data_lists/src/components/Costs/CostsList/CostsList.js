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
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {props.costs.map((cost) => (
          <CostItem
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default CostsList;
