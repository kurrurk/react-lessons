import { useState } from 'react';
import styles from './App.module.css';
import Card from './components/UI/Card';
import CreateUser from './components/NewUser/CreateUser';
import ShowUsers from './components/Users/ShowUsers';
import Popup from './components/UI/Popup';

const INITIAL_USERS = [];

const App = () => {

  const [users, setUsers] = useState(INITIAL_USERS);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [errorText, setErrorText] = useState('error');

  const saveUserDataHandler = (newUser) => {

    if (newUser.name && newUser.age > 0) {
      setUsers( oldUsers => { return [newUser, ...oldUsers] } );
    } else {      
      ( newUser.age < 0 ) ? setErrorText('negativeAge') : setErrorText('noInput');   
      setIsPopupVisible(true);       
    }
    
  }

  const setIsPopupVisibleHandler = () => {
    setIsPopupVisible(false);
  }

  return (
    <div className={`${styles["App"]}`}>
      <Card>
        <CreateUser onAddNewUser={saveUserDataHandler}/>
      </Card>
      <Card>
        <ShowUsers users={users}/>
      </Card>
      {isPopupVisible && <Popup showPopup={setIsPopupVisibleHandler} errorText={errorText}/>}
    </div>
  );
}

export default App;
