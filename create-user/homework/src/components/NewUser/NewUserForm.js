import {useState} from 'react';
import styles from './NewUserForm.module.css';
import Button from '../UI/Button';

const NewUserForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    
    const submitHandler = (event) => {
        event.preventDefault();

        const userData = {
          name : inputName,
          age : inputAge
        };
    
        props.onSaveUserData(userData);

        if ( inputName && inputAge > 0) {
            setInputAge('');
            setInputName('');
        }
        
    }

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setInputAge(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={styles['create-user__controls']}>
                <div className={styles['create-user__control']}>
                    <label htmlFor="">Name</label>
                    <input type="text" value={inputName} onChange={nameChangeHandler}/>
                </div>
                <div className={styles['create-user__control']}>
                    <label htmlFor="">Alter</label>
                    <input type="number" value={inputAge} onChange={ageChangeHandler}/>
                </div>
                <div className={styles['create-user__actions']}>
                    <Button type='submit'>Nutzer einfügen</Button>
                </div>
            </div>
        </form>
    )
}

export default NewUserForm;