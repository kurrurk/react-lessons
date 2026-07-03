import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const FormControl = styled.div /*css*/ `
  margin: 1rem 0;

  & label {
    color: ${(props) => (props.invalid ? "#dc2626" : "white")};
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid ${(props) => (props.invalid ? "#dc2626" : "#28506e")};
    background: ${(props) => (props.invalid ? "salmon" : "#081624")};
    color: white;
    transition: 0.3s;
  }

  & input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 12px rgba(55, 214, 255, 0.45);
  }
`;

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    if (inputText.trim().length > 0) {
      setIsInputValid(true);
    }
    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      setIsInputValid(false);
      return;
    }
    props.onAddTask(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={`${!isInputValid ? "invalid" : ""}`}> */}
      <FormControl invalid={!isInputValid}>
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </FormControl>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
