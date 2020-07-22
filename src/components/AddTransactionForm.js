import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    amount: 0.01,
    category: "",
    date: "",
    description: "",
  };

  onFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const payLoad = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state), // body data type must match "Content-Type" header
    };

    fetch("http://localhost:6001/transactions", payLoad)
      .then((r) => r.json())
      .then((newItem) => {
        this.props.handleAdd(newItem);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="inline fields">
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.onFormChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.onFormChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={this.state.category}
              onChange={this.onFormChange}
            />
            <input
              type="number"
              name="amount"
              placeholder="amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.onFormChange}
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
