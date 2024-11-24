import "./App.css";
import { useState, useCallback } from "react";
import Button from "./components/UI/Button";
import ParagraphOutput from "./components/Output/ParagraphOutput";

function App() {

  const [isParagraphShown, setIsParagraphShown] = useState(false);
  const [isTogglingActivated, setIsTogglingActivated] = useState(false);

  console.log('App Component!');

  const toggleParagraph = useCallback(() => {
    if (isTogglingActivated) {
      setIsParagraphShown(precIsParagraphShown => !precIsParagraphShown);
    }
  }, [isTogglingActivated]);

  const aktivateToggling = () => {
    setIsTogglingActivated(true);
  }

  return (
    <div className="app">
      <h1>React под Капотом</h1>
      <ParagraphOutput isShown={isParagraphShown}/>
      <Button onClick={aktivateToggling}>Button aktivieren</Button>
      <Button onClick={toggleParagraph}>zeigen / verstecken</Button>
    </div>
  );
}

export default App;
