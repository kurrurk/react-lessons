import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
  const isUserLogedIn = useSelector((state) => state.auth.isUserLoggedIn);

  return (
    <div>
      <Header isUserLogedIn={isUserLogedIn} />
      {!isUserLogedIn && <Auth />}
      <Counter />
    </div>
  );
}

export default App;
