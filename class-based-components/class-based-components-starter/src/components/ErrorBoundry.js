import { Component } from "react";

class ErrorBoundry extends Component {

  constructor() {
    super()
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({hasError: true})
  }

  render () {
    if (this.state.hasError) {
      return <p>Etwas ist schief gelaufen!</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundry;