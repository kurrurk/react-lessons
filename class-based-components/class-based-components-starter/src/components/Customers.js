import { /* useState, */ Component } from "react";
import Customer from "./Customer";

import styles from "./Customers.module.css";



class Customers extends Component {

  constructor() {
    super();
    this.state = {
      showCustomers: true,
      comeState: 'Foo'
    };
  }

  componentDidUpdate() {
    if (this.props.customers.length === 0) {
      throw new Error('Keine Kunde!!!');
    }
  }

  toggleCustomersHandler() { 
      //this.state.showCustomers = true; - Неправильно;
      this.setState((curState) => {
        return {showCustomers: !curState.showCustomers};
      });
  }

  render() {
    const customersList = (
      <ul>
        {this.props.customers.map((customer) => (
          <Customer key={customer.id} name={customer.name} />
        ))}
      </ul>
    );

    return (
      <div className={styles.customers}>
        <button onClick={this.toggleCustomersHandler.bind(this)}>
          {this.state.showCustomers ? "Спрятать" : "Показать"} Заказчиков
        </button>
        {this.state.showCustomers && customersList}
      </div>
    );
  }

}

/* const Customers = () => {
  const [showCustomers, setShowCustomers] = useState(true);

  const toggleCustomersHandler = () => {
    setShowCustomers((curState) => !curState);
  };

  const customersList = (
    <ul>
      {DUMMY_CUSTOMERS.map((customer) => (
        <Customer key={customer.id} name={customer.name} />
      ))}
    </ul>
  );

  return (
    <div className={styles.customers}>
      <button onClick={toggleCustomersHandler}>
        {showCustomers ? "Спрятать" : "Показать"} Заказчиков
      </button>
      {showCustomers && customersList}
    </div>
  );
}; */

export default Customers;
