import { useRef, useState } from "react";
import styles from "./SubmitOrder.module.css";

const isInputValid = (inputValue) => inputValue.trim() !== '';

const SubmitOrder = (props) => {

  const [formValidity, setFormValidity] = useState({
    name: true,
    city: true,
    address: true,
  })
  
  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const addresInputRef = useRef();

  const confirmOrderHandler = (event) => {
    event.preventDefault();

    const enterdName =nameInputRef.current.value;
    const enterdCity =cityInputRef.current.value;
    const enterdAddres =addresInputRef.current.value;

    const isEnteredNameValid = isInputValid(enterdName);
    const isEnteredCityValid = isInputValid(enterdCity);
    const isEnteredAddresValid = isInputValid(enterdAddres);

    const isFormValid = isEnteredNameValid && isEnteredCityValid && isEnteredAddresValid;

    setFormValidity({
      name: isEnteredNameValid,
      city: isEnteredCityValid,
      address: isEnteredAddresValid,
    })

    if(!isFormValid) {
      return;
    }

    //отправка данных на сервер
    props.onSubmit ({
      name: enterdName,
      city: enterdCity,
      address: enterdAddres
    });

  }  

  return <form className={styles.form} onSubmit={confirmOrderHandler}>
    <div className={`${styles.control} ${!formValidity.name && styles.invalid}`}>
      <label htmlFor="name">Введите Имя</label>
      <input type="text" id="name" ref={nameInputRef}/>
      {!formValidity.name && <p>Пожалуйста введите Имя.</p>}
    </div>
    <div className={`${styles.control} ${!formValidity.city && styles.invalid}`}>
      <label htmlFor="city">Введите Название Города</label>
      <input type="text" id="city" ref={cityInputRef}/>
      {!formValidity.city && <p>Пожалуйста введите Название Города.</p>}
    </div>
    <div className={`${styles.control} ${!formValidity.address && styles.invalid}`}>
      <label htmlFor="addres">Введите Адрес</label>
      <input type="text" id="addres" ref={addresInputRef}/>
      {!formValidity.address && <p>Пожалуйста введите Адрес.</p>}
    </div>  
    <div className={styles.actions}>
      <button className={styles.submit}>Подтвердить заказ</button>
      <button type="button" onClick={props.onCancel}>Отменить</button>
    </div>    
  </form>
}

export default SubmitOrder;