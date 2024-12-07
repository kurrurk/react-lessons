import { useState,useRef } from "react";

const SomeInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  const formSubmitHandler= event => {
    event.preventDefault();

    console.log( 'enteredName: ' + enteredName + ';\nnameInputRef.current.value: ' + nameInputRef.current.value +';');
    setEnteredName('');
    // nameInputRef.current.value = ""; nich die besste Praktikum!
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Введите Имя</label>
        <input 
          ref={nameInputRef}
          type="text" 
          id="name" 
          onChange={nameInputChangeHandler} 
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
