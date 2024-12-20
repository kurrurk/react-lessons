import styles from './ErrorModal.module.css'
import Card from "./Card";
import Button from "./Button";
import React from 'react';
import ReactDOM from "react-dom";


const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onCloseModal}></div>
}

const Modal = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onCloseModal}>Schließen</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {

return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onCloseModal={props.onCloseModal}/>, document.querySelector('#backdrop'))}
            {ReactDOM.createPortal(<Modal title={props.title} message={props.message} onCloseModal={props.onCloseModal}/>, document.querySelector('#modal'))}
        </React.Fragment>
)
        

}

export default ErrorModal;