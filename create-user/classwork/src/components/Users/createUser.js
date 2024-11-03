import React, {useState, useRef, Fragment} from 'react';
import styles from "./CreateUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';
//import Wrapper from '../helpers/Wrapper';

const CreateUser = (props) => {
    
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const createUserHandler = (event) => {
        event.preventDefault();
        const inputUserName = nameInputRef.current.value;
        const inputUserAge = ageInputRef.current.value;

        if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
            setError({
                title : 'Falsche Eingabe',
                message : 'Felder dürfen nicht leer sein',
            });
            return;
        }

        if (+inputUserAge < 1) {
            setError({
                title : 'falsches Alter',
                message : 'Das Alter muss größer als 0 sein',
            });
            return;
        }

        props.onCreateUser(inputUserName.trim(), inputUserAge.trim())
        nameInputRef.current.value = ''; // не рекомендуется?
        ageInputRef.current.value = ''; // не рекомендуется?

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
                    <input id="name" type="text" ref={nameInputRef}/>
                    <label htmlFor="age">Alter</label>
                    <input id="age" type="number" ref={ageInputRef}/>
                    <Button type="submit">Nutzer einfügen</Button>
                </form>
            </Card>
        {/*</Wrapper>*/} 
        </Fragment>    
    )
}

export default CreateUser;