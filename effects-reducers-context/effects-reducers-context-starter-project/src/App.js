import React, {useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
// import AuthContext from "./store/auth-context";

function App() {

  const ctx = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  

  // useEffect(() => {

  //   const storedLoginInfo = localStorage.getItem('isLoggedIn');
  
  //   if (storedLoginInfo === '1') {
  //     setIsLoggedIn(true);
  //   }

  // }, []);

  // const loginHandler = (email, password) => {
  //   localStorage.setItem('isLoggedIn', '1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  return (
      <React.Fragment>
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login/>}
          {ctx.isLoggedIn && <Home/>}
        </main>
      </React.Fragment>
  );
}

export default App;
