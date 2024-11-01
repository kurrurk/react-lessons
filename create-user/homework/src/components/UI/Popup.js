import styles from "./Popup.module.css"
import Card from "./Card";
import Button from "./Button";

const ERRORS =  {
    noInput : {
        title : 'Falsche Eingabe',
        content : 'Felder dürfen nicht leer sein',
    },
    negativeAge : {
        title : 'falsches Alter',
        content : 'Das Alter muss größer als 0 sein',
    } 
}


const Popup = (props) => {

    const setIsPopupVisibleHandler = (event) => {
        props.showPopup();
    }

    return (

        <div className={styles['popup-wrapper']}>
            <Card className={styles.popup}>
                <div className={styles['popup-header']}>
                    <h3>{ERRORS[props.errorText].title}</h3>
                </div>
                <div className={styles['popup-content']}>{ERRORS[props.errorText].content}</div>
                <Button className={'popup-close-button'} onClick={setIsPopupVisibleHandler}>Schließen</Button>
            </Card>
            <div className={styles['popup-close-layer']} onClick={setIsPopupVisibleHandler}></div>
        </div>

    ) 

}

export default Popup;