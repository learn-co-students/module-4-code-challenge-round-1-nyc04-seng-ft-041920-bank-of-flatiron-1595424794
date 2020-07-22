import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    value: " ",
    description: " ",
    date: " "
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      date: event.target.date,
      description: event.target.description,
      category: event.target.category,
      amount: event.target.amount
    };
    
    console.log(data)
    
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleChange}/>
            <input 
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount} onChange={this.handleChange}
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
