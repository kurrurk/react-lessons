import { useState } from "react";

const useInput = (validateValueFunc) => {

  const [enteredValue, setEnteredValue] = useState('');
  const [wasInputTouched,setWasInputTouched] = useState(false);

  const isEnteredValueValid = validateValueFunc(enteredValue);
  const isInputInvalid = !isEnteredValueValid && wasInputTouched; 

  const inputChangeHandler = event => {
    setEnteredValue(event.target.value); 
  };

  const inputLostFocusHandler = event => {
    setWasInputTouched(true); 
  }

  const resetValues = () => {
    setEnteredValue('');
    setWasInputTouched(false);
  }

  return {
    value: enteredValue,
    hasError: isInputInvalid,
    isValid: isEnteredValueValid,
    inputChangeHandler,
    inputLostFocusHandler,
    resetValues
  };

}

export default useInput;