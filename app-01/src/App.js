import Costs from "./components/Costs";

const costs = [
  {
    date : new Date(2024, 2, 15),
    description : "Kühlschrank",
    ammount : 999.99
  },
  {
    date : new Date(2024, 4, 11),
    description : "Laptop",
    ammount : 1500.45
  },
  {
    date : new Date(2024, 6, 11),
    description : "Jeans",
    ammount : 69.85
  }
]

function App() {
  return (
    <div className="App">
      <h1>Hello world!!!</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;