import CostItem from "../CostItem/CostItem";
import Card from "../../UI/Card/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import "./CostsList.css";
import React, { useState } from "react";
const CostsList = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  let costsContent = <p className="p-2 text-info">В этом году расходов нет</p>;

  if (filteredCosts.length !== 0) {
    costsContent = filteredCosts.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      />
    ));
  }

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {/* {filteredCosts.length === 0 && costsContent} */}
        {costsContent}
      </Card>
    </div>
  );
};

export default CostsList;
