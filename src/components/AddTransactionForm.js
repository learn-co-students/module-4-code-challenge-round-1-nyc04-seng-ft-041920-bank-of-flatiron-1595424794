import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewTransaction(this.state) 
    this.setState({
      date: '',
      description: '',
      category: '',
      amount: ''
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" value={this.state.date} onChange={this.handleChange} name="date" />
            <input type="text" value={this.state.description} onChange={this.handleChange} name="description" placeholder="Description" />
            <input type="text" value={this.state.category} onChange={this.handleChange} name="category" placeholder="Category" />
            <input
              type="number"
              value={this.state.amount}
              onChange={this.handleChange}
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
