import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/cartContextProvider";

function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const cartVisibilityHandler = () => {
    setCartIsVisible(!cartIsVisible);
  }

  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart={cartVisibilityHandler}/>}
      <Header onShowCart={cartVisibilityHandler} />
      <main>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
