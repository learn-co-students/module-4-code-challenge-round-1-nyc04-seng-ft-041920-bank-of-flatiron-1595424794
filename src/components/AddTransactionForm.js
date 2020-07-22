import React, { Component } from "react";

class AddTransactionForm extends Component {

state = {
  date: "",
  description: "",
  category: "",
  amount: ""
}

handleSubmitChange = event => {
  const inputName = event.target.name
  this.setState({
    [inputName]: event.target.value
  })
}



handleSubmit = event => {
  event.preventDefault()

  const dataBody = {
    ...this.state

  }

  fetch("http://localhost:6001/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataBody)
  })
  .then(r => r.json())
  .then(newSubmit => {
    this.props.handleAddSubmit(newSubmit)
  })

}



  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit} >
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleSubmitChange} />
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleSubmitChange} />
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleSubmitChange} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleSubmitChange}
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
