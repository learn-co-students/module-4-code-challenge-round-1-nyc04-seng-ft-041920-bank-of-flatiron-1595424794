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


  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.newTransactionSubmit}>
          <div className="inline fields">
            <input type="date" name="date" />
            <input type="text" name="description" placeholder="Description" />
            <input type="text" name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
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
