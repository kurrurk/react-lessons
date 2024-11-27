import { Fragment, /* useState, useEffect, */ Component } from "react";
import Customers from "./Customers";
import styles from "./CustomerFilter.module.css";
import CustomersContext from "../store/customers-context";
import ErrorBoundry from './ErrorBoundry';


class CustomerFilter extends Component {

  static contextType = CustomersContext;  

  constructor() {
    super();
    this.state = {
      filteredCustomers: [],
      filter: ''
    }
  }

  componentDidMount() {
    // отправить HTTP запрос...
    this.setState({
      filteredCustomers: this.context.customers,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.filter !== this.state.filter) {
      this.setState({
        filteredCustomers: this.context.customers.filter((customer) => customer.name.includes(this.state.filter))
      })
    }    
  }
  
  filterHandler(event) {
    this.setState({
      filter: event.target.value
    });
  }

  render() {
    return (
      <Fragment>
        <div className={styles.filter}>
          <input type="search" onChange={this.filterHandler.bind(this)} />
        </div>
        <ErrorBoundry>
          <Customers customers={this.state.filteredCustomers} />
        </ErrorBoundry>
    </Fragment>
    )
  }
}

/* const CustomerFilter = () => {
  const [filteredCustomers, setFilteredCustomers] = useState(DUMMY_CUSTOMERS);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setFilteredCustomers(
      DUMMY_CUSTOMERS.filter((customer) => customer.name.includes(filter))
    );
  }, [filter]);

  const filterHandler = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Fragment>
      <div className={styles.filter}>
        <input type="search" onChange={filterHandler} />
      </div>

      <Customers customers={filteredCustomers} />
    </Fragment>
  );
}; */

export default CustomerFilter;
