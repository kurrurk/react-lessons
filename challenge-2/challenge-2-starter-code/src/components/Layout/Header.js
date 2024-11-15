import React from 'react';
import sushiImage from "../../assets/sushi.jpg";
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Япона Кухня</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img alt="Блюда японской кухни" src={sushiImage}/>
            </div>
        </React.Fragment>
    )
} 

export default Header;