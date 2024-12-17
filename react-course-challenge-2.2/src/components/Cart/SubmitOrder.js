import styles from "./SubmitOrder.module.css";

const SubmitOrder = (props) => {
  const confirmOrderHandler = (event) => {
    event.preventDefault();
  };

  return <form onSubmit={confirmOrderHandler}>
    <div className={styles.control}>
      <label htmlFor="name">Введите Имя</label>
      <input type="text" id="name"/>
    </div>
    <div className={styles.control}>
      <label htmlFor="city">Введите Название Города</label>
      <input type="text" id="city"/>
    </div>
    <div className={styles.control}>
      <label htmlFor="addres">Введите Адрес</label>
      <input type="text" id="addres"/>
    </div>  
    <button>Подтвердить заказ</button>
    <button type="button" onClick={props.onCancel}>Отменить</button>
  </form>
}

export default SubmitOrder;