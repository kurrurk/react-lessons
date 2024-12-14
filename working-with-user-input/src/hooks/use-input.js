import { useState,useReducer } from "react";

const initialInputState = {
  inputValue: "",
  wasTouched: false
};

const inputStateReduser = (state, action) => {

  if ( action.type === "INPUT_CHANGE" ) {
    return { inputValue: action.value, wasTouched: state.wasTouched }
  }
  if ( action.type === "INPUT_BLUR" ) {
    return { inputValue: state.value, wasTouched: true }
  }
  if ( action.type === "RESET_VALUES" ) {
    return { inputValue: '', wasTouched: false }
  }
   
  return initialInputState;

}

const useInput = (validateValueFunc) => {

  const [inputState, dispatchAction] = useReducer(inputStateReduser, initialInputState);

  const isEnteredValueValid = validateValueFunc(inputState.inputValue);
  const isInputInvalid = !isEnteredValueValid && inputState.wasTouched; 

  const inputChangeHandler = event => {
    dispatchAction({type:"INPUT_CHANGE", value:event.target.value});
  };

  const inputLostFocusHandler = () => {
    dispatchAction({type:"INPUT_BLUR"});
  }

  const resetValues = () => {
    dispatchAction({type:"RESET_VALUES"})
  }

  return {
    value: inputState.inputValue,
    hasError: isInputInvalid,
    isValid: isEnteredValueValid,
    inputChangeHandler,
    inputLostFocusHandler,
    resetValues
  };

}

export default useInput;