import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  firstLetterUpperCase(input) {
    return input[0].toUpperCase() + input.slice(1); 
  }
  
  // using higher order function to set new state values
  handleOnChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // create newTransactin object
    const newTransaction = {
      date: this.state.date,
      description: this.firstLetterUpperCase(this.state.description),
      category: this.firstLetterUpperCase(this.state.category),
      amount: this.state.amount
    }

    // fetch and add newTransaction to database
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
    .then(r => r.json())
    .then(newItem => {
      // pass the new transaction (newItem) returned from fetch 
      // to the callback function in AccountContainer
      this.props.addTransaction(newItem)
      
    })
    // ====> IS THERE A BETTER WAY TO PERFORM THIS ? <====
    // clearing out the input values from the form after submit
    event.target[0].value = ""
    event.target[1].value = ""
    event.target[2].value = ""
    event.target[3].value = 0
    
    this.setState({
      date: event.target[0].value,
      description: event.target[1].value,
      category: event.target[2].value,
      amount: event.target[3].value
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(event) => this.handleSubmit(event)}>
          <div className="inline fields">
            <input type="date" name="practicing_higher_order_fn_1" onChange={this.handleOnChange("date")} value={this.state.date} />
            <input type="text" name="practicing_higher_order_fn_2" placeholder="Description" onChange={this.handleOnChange("description")} value={this.state.description}  />
            <input type="text" name="practicing_higher_order_fn_3" placeholder="Category" onChange={this.handleOnChange("category")} value={this.state.category}  />
            <input
              type="number"
              name="practicing_higher_order_fn_4"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleOnChange("amount")}
              value={this.state.amount}
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
