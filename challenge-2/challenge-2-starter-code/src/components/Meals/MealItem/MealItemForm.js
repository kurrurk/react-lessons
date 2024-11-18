import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {

    const [isAmountValid,setIsAmountValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const inputAmount = amountInputRef.current.value;
        
        if ( inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10) {
            setIsAmountValid(false);
            return; 
        }

        props.onAddToCart(+inputAmount);
    }

    return <form className={styles.form} onSubmit={submitHandler}>
        <Input 
            ref={amountInputRef}
            label='Menge' 
            input={{
                id: props.id,
                type: 'number',
                min: '1',
                step: '1',
                defaultValue: '1',
            }} />
        <button>Einfügen</button>
        {!isAmountValid && <p>Bitte geben Sie eine Menge von 1 bis 10 ein</p>}
    </form>

}

export default MealItemForm;