import styles from './UserInfo.module.css'

const UserInfo = (props) => {

    return (
        <div className={styles.user}>
            {props.name + ' - ' + props.age}
        </div>
    )

}

export default UserInfo;