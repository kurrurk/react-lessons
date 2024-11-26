import { Fragment, /* useState, useEffect, */ Component } from "react";
import Customers from "./Customers";
import styles from "./CustomerFilter.module.css";


const DUMMY_CUSTOMERS = [
  { id: "c1", name: "Дмитрий" },
  { id: "c2", name: "Михаил" },
  { id: "c3", name: "Ирина" },
];


class CustomerFilter extends Component {
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
      filteredCustomers: DUMMY_CUSTOMERS,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.filter !== this.state.filter) {
      this.setState({
        filteredCustomers: DUMMY_CUSTOMERS.filter((customer) => customer.name.includes(this.state.filter))
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

        <Customers customers={this.state.filteredCustomers} />
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
