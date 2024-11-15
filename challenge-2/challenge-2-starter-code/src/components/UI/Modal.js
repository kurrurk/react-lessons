import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import React from 'react';

const Backdrop = (props) => {
    return <div onClick={props.onHideCart} className={styles.backdrop}></div>
}


const ModalWindow = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
}

const portalElement = document.querySelector('#overlays')

const Modal = (props) => {

    return  <React.Fragment>
                {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalElement)}
                {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
            </React.Fragment>


}

export default Modal;