import CostsList from "./components/Costs/CostsList/CostsList";
import NewCost from "./components/Costs/NewCost/NewCost";

const App = () => {
  const costs = [
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
      date: new Date(2026, 2, 15),
      description: "Backpack",
      amount: 42.99,
    },
  ];

  const addCostHandler = (cost) => {
    console.log("App Component");
    console.log(cost);
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <CostsList costs={costs} />
    </div>
  );
};

export default App;
