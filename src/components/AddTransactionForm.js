import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: 0.01
  }

  handleOnChange = event => {
    this.setState({
    [event.target.name]: event.target.value 
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();

    // const transactionData = {
    // "date": this.state.date,
    // "description": this.state.description,
    // "category": this.state.category,
    // "amount": parseInt(this.state.amount)
    // }

  fetch(`http://localhost:6001/transactions`, {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  date: this.state.date,
  description: this.state.description,
  category: this.state.category,
  amount: parseInt(this.state.amount),
  })
})
  .then(r => r.json())
  .then(transactionData => {
  this.props.addTransaction(transactionData)
  // this.setSate ({
  //   date: "",
  //   description: "",
  //   category: "",
  //   amount: null
  // })
  });
  }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleOnChange}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleOnChange}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleOnChange}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleOnChange}
            />
          </div>
          <button className="ui button" type="submit" onSubmit={this.handleOnSubmit}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;

