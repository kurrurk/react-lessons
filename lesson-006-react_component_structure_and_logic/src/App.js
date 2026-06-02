import CostItem from "./components/CostItem/CostItem";

function App() {
  const costs = [
    {
      date: new Date(2026, 5, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2026, 11, 25),
      description: "MacBook",
      amount: 1071.54,
    },
    {
      date: new Date(2026, 2, 15),
      description: "Backpack",
      amount: 42.99,
    },
  ];

  return (
    <div>
      <h1>Hello React!</h1>
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      ></CostItem>
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      ></CostItem>
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      ></CostItem>
    </div>
  );
}

export default App;
