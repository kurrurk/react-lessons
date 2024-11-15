import React from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {

    const CartItems = <ul className={styles['cart-items']}>{[{id:'m1', name:'суп', ammaunt: 2, price: 10.99}].map(
        (item) => <li key={item.id}>{item.name}</li>
    )}</ul>;

    return  <Modal onHideCart={props.onHideCart}>
                {CartItems}
                <div className={styles.total}>
                    <span>Summe</span>
                    <span>49.99</span>
                </div>
                <div className={styles.actions}>
                    <button onClick={props.onHideCart} className={styles['button--alt']}>Schliesen</button>
                    <button className={styles.button}>Jetzt bestellen</button>
                </div>
            </Modal>

}

export default Cart;