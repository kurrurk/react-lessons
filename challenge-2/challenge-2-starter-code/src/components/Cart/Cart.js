import React from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-content';
import CartItem from './CartItem';

const Cart = (props) => {

    const cartContext = useContext(CartContext);
    const totalAmount = `${Math.abs(cartContext.totalAmount).toFixed(2)}€`;
    const hasItems = cartContext.items.length > 0;

    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id);
    }

    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1})
    }

    const CartItems = <ul className={styles['cart-items']}>{cartContext.items.map(
        (item) => (
            <React.Fragment>
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount}
                    price={item.price}
                    onAdd={addCartItemHandler.bind(null, item)}
                    onRemove={removeCartItemHandler.bind(null, item.id)}
                />
                {/* <li key={item.id}>{item.name}</li> */}
            </React.Fragment>           
        )
    )}</ul>;

    return  <Modal onHideCart={props.onHideCart}>
                {CartItems}
                <div className={styles.total}>
                    <span>Summe</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={styles.actions}>
                    <button onClick={props.onHideCart} className={styles['button--alt']}>Schliesen</button>
                    {hasItems && <button className={styles.button}>Jetzt bestellen</button>}
                </div>
            </Modal>

}

export default Cart;