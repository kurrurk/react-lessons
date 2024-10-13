import { useState } from 'react';
import './CostForm.css';

const CostForm = () => {

    //const [name, setName] = useState('');
    //const [amount, setAmount] = useState('');
    //const [date, setDate] = useState('');

    const [userInput, setUserInput] = useState({
        name: '',
        amount: '',
        date: ''
    });

    const nameChangeHandler = (event) => {
        //setName(event.target.value);
        setUserInput({
            ...userInput,
            name: event.target.value
        });
    }    

    const amountChangeHandler = (event) => {
        //setAmount(event.target.value);
        setUserInput({
            ...userInput,
            amount: event.target.value
        });
    }    

    const dateChangeHandler = (event) => {
        //setDate(event.target.value);
        setUserInput({
            ...userInput,
            date: event.target.value
        });
    }

    console.log( '--------------------' );
    //console.log( 'name => ' + name );
    console.log( 'name => ' + userInput.name );
    //console.log( 'amount => ' + amount );
    console.log( 'name => ' + userInput.amount);
    //console.log( 'date => ' + date );
    console.log( 'name => ' + userInput.date );
    console.log( '--------------------' );

    return (
        <form>
            <div className='new-cost__controls'>
                
            <div className='new-cost__control'>
                 <label htmlFor="">Artikel</label>
                 <input type="text" onChange={nameChangeHandler}/>
            </div>  

            <div className='new-cost__control'>
                 <label htmlFor="">Summe</label>
                 <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>  

            <div className='new-cost__control'>
                 <label htmlFor="">Datum</label>
                 <input type="date" min="2019-01-01" step="2024-12-31" onChange={dateChangeHandler} />
            </div>  

            <div className='new-cost__actions'>
                 <button type='submit'>Artikel einfügen</button>
            </div>  
            
            </div>  
        </form>
    );
}
export default CostForm;