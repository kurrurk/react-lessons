import React, { useState, useEffect,useCallback } from "react";

import JokeList from "./components/JokeList";
import "./App.css";
import AddJoke from "./components/AddJoke";

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
  const [error, setError] = useState(null); 

  /* const fetchJokesHandler = () => {
    fetch('https://official-joke-api.appspot.com/random_ten').then(responce => {
      return responce.json();
    }).then(data =>{
      setJokes(data);
    });
  } */

  const fetchJokesHandler = useCallback( async () => {
    setIsLoading(true);
    setError(null)
    try {    
      const responce = await fetch('https://react-course-http-bf9b0-default-rtdb.firebaseio.com/');
      if (!responce.ok) { throw new Error('Something go wrong...') }
      const data = await responce.json();
      setJokes(data);      
    } catch(err) {
      setError(err.message);
    }
    setIsLoading(false);
  },[]); 

  useEffect(() => {
    fetchJokesHandler();
  },[fetchJokesHandler])
  
  const addJokeHandler = (joke) => {
    console.log(joke)
  }

  let content = <p> Jokes not found... </p>;
  
  if(jokes.length > 0) {
    content = <JokeList jokes={jokes} />;
  }

  if(error) {
    content = <p>{error}</p>;
  }

  if(isLoading) {
    content = <p> Jokes loading... </p>;
  }
    
  return (
    <React.Fragment>
      <section>
        <AddJoke onAddJoke={addJokeHandler} />
      </section>
      <section>
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      <section>
        {content}
        {/* {!isLoading && jokes.length > 0 && <JokeList jokes={jokes} />}
        {!isLoading && jokes.length === 0 && !error && <p> Jokes not found... </p>}
        {isLoading && <p> Jokes loading... </p>}
        {!isLoading && error && <p>{error}</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
