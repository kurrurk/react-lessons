import Card from "../../UI/Card/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import "./Costs.css";
import React, { useState } from "react";
import CostList from "../CostList/CostList";
const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
