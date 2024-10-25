import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;


  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.invalid ? 'red' : 'black'};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
    background-color: ${props => props.invalid ? '#ff000044' : 'transparent'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #c8e1e4;
    border-color: #00358b;
  }
`;

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
      {/* <FormControl className={!isInputValid && 'invalid'}> */}
      <FormControl invalid={!isInputValid}>
        <label>Задачи</label>
        <input value={inputText} type="text" onChange={taskInputChangeHandler} />
      </FormControl>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
