import useInput from "../hooks/use-input";

const SomeForm = (props) => {

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }  

  const isInputEmpty = (val) => val.trim() !== "";

  const {
    value: enteredFirstName, 
    hasError: hasFirstNameInputError, 
    isValid: isEnteredFirstNameValid,
    inputChangeHandler: firstNameInputChangeHandler,
    inputLostFocusHandler: firstNameInputLostFocusHandler,
    resetValues: resetFirstNameValues
  } = useInput(isInputEmpty);

  const {
    value: enteredSecondName, 
    hasError: hasSecondNameInputError, 
    isValid: isEnteredSecondNameValid,
    inputChangeHandler: secondNameInputChangeHandler,
    inputLostFocusHandler: secondNameInputLostFocusHandler,
    resetValues: resetSecondNameValues
  } = useInput(isInputEmpty);

  const {
    value: enteredEmail, 
    hasError: hasEmailInputError, 
    isValid: isEnteredEmailValid,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    resetValues: resetEmailValues
  } = useInput(validateEmail);

  let isFormValid = false;
  
  if (isEnteredFirstNameValid && isEnteredSecondNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isEnteredFirstNameValid || !isEnteredSecondNameValid || !isEnteredEmailValid) {
      return
    }

    console.log( 'Имя: ' + enteredFirstName + ';\nФамилия: ' + enteredSecondName + ';\nEmail: ' + enteredEmail + ';'); 

    resetEmailValues();
    resetFirstNameValues();
    resetSecondNameValues();
  }

  const firstNameInputClasses = hasFirstNameInputError ? "form-control invalid" : "form-control";
  const secondNameInputClasses = hasSecondNameInputError ? "form-control invalid" : "form-control";
  const emailInputClasses = hasEmailInputError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">Введите Имя</label>
          <input 
            type="text" 
            id="first-name"
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputLostFocusHandler} 
            value={enteredFirstName}/>
          {hasFirstNameInputError && <p className="error-text">Нужно обязательно ввести имя</p>}  
        </div>
        <div className={secondNameInputClasses}>
          <label htmlFor="name">Введите Фамилию</label>
          <input 
            type="text" 
            id="second-name"
            onChange={secondNameInputChangeHandler}
            onBlur={secondNameInputLostFocusHandler} 
            value={enteredSecondName}/>
          {hasSecondNameInputError && <p className="error-text">Нужно обязательно ввести фамилию</p>}  
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Введите E-Mail</label>
        <input 
          type="email" 
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputLostFocusHandler} 
          value={enteredEmail}/>
        {hasEmailInputError && <p className="error-text">Нужно обязательно ввести email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeForm;
