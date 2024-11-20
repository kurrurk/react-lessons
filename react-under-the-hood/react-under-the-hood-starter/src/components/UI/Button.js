import styles from './Button.module.css';

const Button = (props) => {

    console.log('Button component!')

    return <button 
                type={props.type || 'button'} 
                disabled={props.disabled}
                onClick={props.onClick} 
                className={`${styles.button} ${props.className}`}>
                {props.children}
            </button>

}

export default Button;