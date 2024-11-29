import React, { useState } from "react";

import JokeList from "./components/JokeList";
import "./App.css";

function App() {
  /* const dummyJokes = [
    {
      id: 1,
      type: "general",
      setup: "What do you call a bee that lives in America?",
      punchline: "A USB.",
    },
    {
      id: 2,
      type: "programming",
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit.",
    },
  ];
 */

  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /* const fetchJokesHandler = () => {
    fetch('https://official-joke-api.appspot.com/random_ten').then(responce => {
      return responce.json();
    }).then(data =>{
      setJokes(data);
    });
  } */

  async function fetchJokesHandler() {
    setIsLoading(true);
    const responce = await fetch('https://official-joke-api.appspot.com/random_ten');
    const data = await responce.json();
    setJokes(data);
    setIsLoading(false);
  } 

    
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      <section>
        {!isLoading && jokes.length > 0 && <JokeList jokes={jokes} />}
        {!isLoading && jokes.length === 0 && <p> Jokes not found... </p>}
        {isLoading && <p> Jokes loading... </p>}
      </section>
    </React.Fragment>
  );
}

export default App;
