//import React from 'react'; // этот компонент в новых версиях можно опустить, но это не точно.
import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date : new Date(2021, 2, 15),
    description : "Kühlschrank",
    amount : 999.99
  },
  {
    id: 'c2',
    date : new Date(2021, 4, 11),
    description : "Laptop",
    amount : 1500.45
  },
  {
    id: 'c3',
    date : new Date(2022, 6, 11),
    description : "Jeans",
    amount : 69.85
  },
  {
    id: 'c4',
    date : new Date(2019, 4, 11),
    description : "Hose",
    amount : 15.45
  },
  {
    id: 'c5',
    date : new Date(2018, 6, 11),
    description : "T-schirt",
    amount : 69.85
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

  const [costs, setSosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setSosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs} />
    </div>
  ); 
}

export default App;