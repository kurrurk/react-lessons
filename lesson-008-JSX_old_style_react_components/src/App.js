import React from "react"; // строка нужна, чтобы использовать объект реакт, для старого синтаксиса
import Costs from "./components/Costs/Costs";

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

  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello React!"),
    React.createElement(Costs, { costs: costs }, ""),
  );

  // return (
  //   <div>
  //     <h1>Hello React!</h1>
  //     <Costs costs={costs} />
  //   </div>
  // );
}

export default App;
