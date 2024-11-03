import React, {useState} from 'react';
import UserList from "./components/Users/UserList";
import CreateUser from "./components/Users/createUser";

const App = () => {

  const [userList, setUserList] = useState([]);

  const createUserHandler = (name,age) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name:name,age:age,id:Math.random().toString()}]; // id:Math.random().toString() -> псевдоуникальность
    });
  }

  return (
    <React.Fragment>
      <CreateUser onCreateUser={createUserHandler}/>
      <UserList users={userList}/>
    </React.Fragment>
  );
};

export default App;
