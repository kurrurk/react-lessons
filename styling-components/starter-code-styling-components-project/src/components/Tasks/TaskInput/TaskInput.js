import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");
  const [isInputValid, setisInputValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    setInputText(event.target.value);
    setisInputValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      setisInputValid(false);
      return ;
    }    
    props.onAddTask(inputText);
    setInputText('');
  };
  
  // inline styling
  // <label style={{color: !isInputValid ? 'red' : 'black' }} >Задачи</label>
  /* <input value={inputText} style={{
          backgroundColor: !isInputValid ? '#ff000044' : 'transparent',
          borderColor: !isInputValid ? 'red' : '' }} type="text" onChange={taskInputChangeHandler} /> */

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control${!isInputValid ? ' invalid' : ''}`}>
        <label>Задачи</label>
        <input value={inputText} type="text" onChange={taskInputChangeHandler} />
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
