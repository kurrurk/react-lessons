import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const cartVisibilityHandler = () => {
    setCartIsVisible(!cartIsVisible);
  }

  return (
    <React.Fragment>
      {cartIsVisible && <Cart onHideCart={cartVisibilityHandler}/>}
      <Header onShowCart={cartVisibilityHandler} />
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
