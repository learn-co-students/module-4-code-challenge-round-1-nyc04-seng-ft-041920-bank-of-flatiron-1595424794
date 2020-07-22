import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }

//   {

//     "id": 1,
//     "date": "2019-12-01",
//     "description": "Paycheck from Bob's Burgers",
//     "category": "Income",
//     "amount": 1000

// }

  newTransactionSubmit = e => {
    e.preventDefault()

    fetch("http://localhost:6001/transactions", {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          date: this.state.date,
          description: this.state.description,
          category: this.state.category,
          amount: this.state.amount
      })
    })

    .then(resp => resp.json())
    .then(newData => {
      this.props.handleNewTransaction(newData)
    })

  }

  
  // Form Changes
  // Date
  handleDateChange = e => {
    this.setState({
      date: e.target.value
    })
  }

  // Description
  handleDescriptionChange = e => {
    this.setState({
      description: e.target.value
    })
  }

  // Category
  handleCategoryChange = e => {
    this.setState({
      category: e.target.value
    })
  }

  // Amount
  handleAmountChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.newTransactionSubmit}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleDateChange} />
            <input type="text" name="description" placeholder="Description" onChange={this.handleDescriptionChange} />
            <input type="text" name="category" placeholder="Category" onChange={this.handleCategoryChange} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleAmountChange}
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
