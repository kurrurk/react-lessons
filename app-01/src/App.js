import CostItem from "./components/CostItem";

const costs = [
  {
    date : new Date(2024, 2, 15),
    description : "Kühlschrank",
    ammount : 999.99
  },
  {
    date : new Date(2024, 2, 15),
    description : "Laptop",
    ammount : 1500.45
  },
  {
    date : new Date(2024, 2, 15),
    description : "Jeans",
    ammount : 69.85
  }
]

function App() {
  return (
    <div className="App">
      <h1>Hello world!!!</h1>
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        ammount={costs[0].ammount}
      ></CostItem>
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        ammount={costs[1].ammount}
      ></CostItem>
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        ammount={costs[2].ammount}
      ></CostItem>  

    </div>
  );
}

export default App;