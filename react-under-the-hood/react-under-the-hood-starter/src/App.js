import "./App.css";
import { useState } from "react";
import Button from "./components/UI/Button";
import ParagraphOutput from "./components/Output/ParagraphOutput";

function App() {

  const [isParagraphShown, setIsParagraphShown] = useState(false);

  console.log('App Component!');

  const toggleParagraph = () => {
    setIsParagraphShown(!isParagraphShown);
  }

  return (
    <div className="app">
      <h1>React под Капотом</h1>
      <ParagraphOutput isShown={isParagraphShown}/>
      <Button onClick={toggleParagraph}>Show / Hide</Button>
    </div>
  );
}

export default App;
