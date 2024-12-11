import { useState, useEffect } from "react";

const SomeInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [wasNameInputTouched,setWasNameInputTouched] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [wasEmailInputTouched,setWasEmailInputTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== "";
  const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched; 

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }  

  const isEnteredEmailValid = validateEmail(enteredEmail.trim());
  const isEmailInputInvalid = !isEnteredEmailValid && wasEmailInputTouched; 

  useEffect(() => {
    if (isEnteredNameValid && isEnteredEmailValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  },[isEnteredNameValid, isEnteredEmailValid])

  const inputChangeHandler = event => {
    if (event.target.id === "name") { setEnteredName(event.target.value); }
    if (event.target.id === "email") { setEnteredEmail(event.target.value); }
  };

  const inputLostFocusHandler = event => {
    if (event.target.id === "name") { setWasNameInputTouched(true); }
    if (event.target.id === "email") { setWasEmailInputTouched(true); }
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    setWasNameInputTouched(true);
    setWasEmailInputTouched(true);

    if (!isEnteredNameValid || !isEnteredEmailValid) {
      return;
    }

    console.log( 'enteredName: ' + enteredName + ';\nenteredEmail: ' + enteredEmail); 

    setEnteredName('');
    setEnteredEmail('');
    setWasNameInputTouched(false);
    setWasEmailInputTouched(false);
  }

  const nameInputClasses = !isNameInputInvalid ? "form-control" : "form-control invalid";
  const emailInputClasses = !isEmailInputInvalid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input 
          type="text" 
          id="name" 
          onChange={inputChangeHandler} 
          onBlur={inputLostFocusHandler}
          value={enteredName}
        />
        {isNameInputInvalid && <p className="error-text">Нужно обязательно ввести имя</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Введите email</label>
        <input 
          type="email" 
          id="email" 
          onChange={inputChangeHandler} 
          onBlur={inputLostFocusHandler}
          value={enteredEmail}
        />
        {isEmailInputInvalid && <p className="error-text">Нужно обязательно ввести email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
