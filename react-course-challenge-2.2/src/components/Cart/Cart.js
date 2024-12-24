import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import { useContext, useState } from "react";
import React from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import SubmitOrder from "./SubmitOrder";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false);
  const [isDataSubmiting, setIsDataSubmiting] = useState(false);
  const [wasDataSendingSuccessful, setWasDataSendingSuccessful] = useState(false);

  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsSubmitOrderAvailable(true);
  };

  const SubmitOrderHandler = async (userData) => {
    setIsDataSubmiting(true);

    await fetch('https://react-course-http-bf9b0-default-rtdb.firebaseio.com/orders.json', {
        method: "POST",
        body: JSON.stringify({
          user:userData,
          orderedMeals: cartContext.items,
      })
    });

    setIsDataSubmiting(false);
    setWasDataSendingSuccessful(true);
    cartContext.clearCart();
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const modalButtons = (
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Закрыть
        </button>
        {!isDataSubmiting && !wasDataSendingSuccessful && hasItems && <button className={styles.button} onClick={orderHandler}>Заказать</button>}
      </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      {isSubmitOrderAvailable && <SubmitOrder onSubmit={SubmitOrderHandler} onCancel={props.onHideCart} />}
      {!isSubmitOrderAvailable && modalButtons}
    </React.Fragment>
  );

  const dataSubmittingCartModalContent = (
    <React.Fragment>
      <p>Отправка данных заказа...</p>
      {modalButtons}
    </React.Fragment>
  );

  const dataWasSubmittedCartModalContent = (
    <React.Fragment>
      <p>Ваш заказ успешно отправлен!!!</p>
      {modalButtons}
    </React.Fragment>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {!isDataSubmiting && !wasDataSendingSuccessful && cartModalContent}
      {isDataSubmiting && dataSubmittingCartModalContent}
      {wasDataSendingSuccessful && dataWasSubmittedCartModalContent}
    </Modal>
  );
};

export default Cart;
