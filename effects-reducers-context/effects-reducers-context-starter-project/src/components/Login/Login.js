import React, { useState, useReducer, useEffect } from "react";

import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReduser = (prevState, action) => {

  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.includes('@'),
    }
  } 
  if (action.type === 'INPUT_BLUR') {
    return {
      value: prevState.value,
      isValid: prevState.value.includes('@'),
    }
  } 
  return {
    value: "",
    isValid: false,
  }
};

const passwordReduser = (prevState, action) => {

  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.trim().length > 7,
    }
  } 
  if (action.type === 'INPUT_BLUR') {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 7,
    }
  } 
  return {
    value: "",
    isValid: false,
  }
};

const Login = (props) => {
  //const [inputEmail, setInputEmail] = useState("");
  //const [emailIsValid, setEmailIsValid] = useState();
  //const [inputPassword, setInputPassword] = useState("");
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] = useReducer(emailReduser, {value: '', isValid: undefined});
  const [passwordState, dispatchPasswordState] = useReducer(passwordReduser, {value: '', isValid: undefined});

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() =>{
    const timer = setTimeout(() => {
      console.log('Effect funktion');
      setFormIsValid(        
        passwordIsValid && emailIsValid
      );
    }, 1000); 
    
    return () => {
      clearTimeout(timer);
      console.log('Reinigung');
    };
  },[passwordIsValid, emailIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmailState({type: 'USER_INPUT', value: event.target.value});
    // setFormIsValid(passwordState.isValid && event.target.value.includes("@"));
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({type: 'USER_INPUT', value: event.target.value});
    // setFormIsValid(event.target.value.length > 7 && emailState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmailState({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
