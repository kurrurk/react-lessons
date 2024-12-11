import useInput from "../hooks/use-input";

const SomeInput = (props) => {

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }  

  const {
    value: enteredName, 
    hasError: hasNameInputError, 
    isValid: isEnteredNameValid,
    inputChangeHandler: nameInputChangeHandler,
    inputLostFocusHandler: nameInputLostFocusHandler,
    resetValues: resetNameValues
  } = useInput(val => val.trim() !== '');

  const {
    value: enteredEmail, 
    hasError: hasEmailInputError, 
    isValid: isEnteredEmailValid,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    resetValues: resetEmailValues
  } = useInput(val => validateEmail(val.trim()));

  // const [isFormValid, setIsFormValid] = useState(false);

  let isFormValid = false;

  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  // useEffect(() => {
  //   if (isEnteredNameValid && isEnteredEmailValid) {
  //     setIsFormValid(true);
  //   } else {
  //     setIsFormValid(false);
  //   }
  // },[isEnteredNameValid, isEnteredEmailValid])

  const formSubmitHandler = event => {
    event.preventDefault();

    if (!isEnteredNameValid || !isEnteredEmailValid) {
      return;
    }

    console.log( 'enteredName: ' + enteredName + ';\nenteredEmail: ' + enteredEmail); 

    resetNameValues();
    resetEmailValues();
  }

  const nameInputClasses = !hasNameInputError ? "form-control" : "form-control invalid";
  const emailInputClasses = !hasEmailInputError ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input 
          type="text" 
          id="name" 
          onChange={nameInputChangeHandler} 
          onBlur={nameInputLostFocusHandler}
          value={enteredName}
        />
        {hasNameInputError && <p className="error-text">Нужно обязательно ввести имя</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Введите email</label>
        <input 
          type="email" 
          id="email" 
          onChange={emailInputChangeHandler} 
          onBlur={emailInputLostFocusHandler}
          value={enteredEmail}
        />
        {hasEmailInputError && <p className="error-text">Нужно обязательно ввести email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
