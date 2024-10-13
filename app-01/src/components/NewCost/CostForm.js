import { useState } from 'react';
import './CostForm.css';

const CostForm = () => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    //const [userInput, setUserInput] = useState({
    //    name: '',
    //    amount: '',
    //    date: ''
    //});

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        // не корректный способ, из-за таймингов обновления состояния
        //setUserInput({
        //    ...userInput,
        //    name: event.target.value
        //});
        // корректный способ : 
        //setUserInput((previousState) => {
        //    return {
        //        ...previousState,
        //        name: event.target.value
        //    }
        //});
    }    

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        // не корректный способ, из-за таймингов обновления состояния
        //setUserInput({
        //    ...userInput,
        //    amount: event.target.value
        //});
        // корректный способ : 
        //setUserInput((previousState) => {
        //    return {
        //        ...previousState,
        //        amount: event.target.value
        //    }
        //});
    }    

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
        // не корректный способ, из-за таймингов обновления состояния
        //setUserInput({
        //    ...userInput,
        //    date: event.target.value
        //});
        // корректный способ : 
        //setUserInput((previousState) => {
        //    return {
        //        ...previousState,
        //        date: event.target.value
        //    }
        //});

    }

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate) 
        }

        console.log( '--------------------' );
        console.log( costData );
        console.log( '--------------------' );

        setInputName('');
        setInputAmount('');
        setInputDate('');

    }

    console.log( '--------------------' );
    console.log( 'name => ' + inputName );
    //console.log( 'name => ' + userInput.name );
    console.log( 'amount => ' + inputAmount );
    //console.log( 'name => ' + userInput.amount);
    console.log( 'date => ' + inputDate );
    //console.log( 'name => ' + userInput.date );
    console.log( '--------------------' );

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                
            <div className='new-cost__control'>
                 <label htmlFor="">Artikel</label>
                 <input type="text" value={inputName} onChange={nameChangeHandler}/>
            </div>  

            <div className='new-cost__control'>
                 <label htmlFor="">Summe</label>
                 <input type="number" min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler} />
            </div>  

            <div className='new-cost__control'>
                 <label htmlFor="">Datum</label>
                 <input type="date" min="2019-01-01" step="2024-12-31" value={inputDate} onChange={dateChangeHandler} />
            </div>  

            <div className='new-cost__actions'>
                 <button type='submit'>Artikel einfügen</button>
            </div>  
            
            </div>  
        </form>
    );
}
export default CostForm;