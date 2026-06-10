import React, { useState } from "react";

import CostsList from "./components/Costs/CostsList/CostsList";
import NewCost from "./components/Costs/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2026, 5, 12),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2026, 11, 25),
    description: "MacBook",
    amount: 1071.54,
  },
  {
    id: "c3",
    date: new Date(2023, 2, 15),
    description: "Backpack",
    amount: 42.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...costs];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <CostsList costs={costs} />
    </div>
  );
};

export default App;
