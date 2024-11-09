import React, {useContext} from "react";

import Card from "../UI/Card/Card";
import AuthContext from "../../store/auth-context";
import styles from "./Home.module.css";
import Button from "../UI/Button/Button";

const Home = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>Рады Вас Видеть Снова!</h1>
      <Button onClick={ctx.onLogout}>Ausgang</Button>
    </Card>
  );
};

export default Home;
