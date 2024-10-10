//import React from 'react'; // этот компонент в новых версиях можно опустить, но это не точно.
import Costs from "./components/Costs/Costs";

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

const App = () => { // стрелочная функция

  /* // старый синтаксис
  return React.createElement(
    "div", 
    {}, 
    React.createElement("h1",{},"Начнем изучение React!!!"),
    React.createElement(Costs,{costs:costs}),
  );
  */
  return (
    <div className="App">
      <h1>Начнем изучение React!!!</h1>
      <Costs costs={costs} />
    </div>
  ); 
}

export default App;