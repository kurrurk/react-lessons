import React, {useState, Fragment} from 'react';
import styles from "./CreateUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';
//import Wrapper from '../helpers/Wrapper';

const CreateUser = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setInputAge(event.target.value);
    }

    const createUserHandler = (event) => {
        event.preventDefault();
        if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
            setError({
                title : 'Falsche Eingabe',
                message : 'Felder dürfen nicht leer sein',
            });
            return;
        }

        if (+inputAge < 1) {
            setError({
                title : 'falsches Alter',
                message : 'Das Alter muss größer als 0 sein',
            });
            return;
        }

        props.onCreateUser(inputName.trim(), inputAge.trim())
        
        setInputAge('');
        setInputName('');
    }

    const errorHandler = () => {
        setError(false);
    }

    return (
        <Fragment>
        {/*<Wrapper>*/} 
            {error && <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message} />}
            <Card className={styles.input}>
                <form onSubmit={createUserHandler}>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={inputName} onChange={nameChangeHandler}/>
                    <label htmlFor="age">Alter</label>
                    <input id="age" type="number" value={inputAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Nutzer einfügen</Button>
                </form>
            </Card>
        {/*</Wrapper>*/} 
        </Fragment>    
    )
}

export default CreateUser;