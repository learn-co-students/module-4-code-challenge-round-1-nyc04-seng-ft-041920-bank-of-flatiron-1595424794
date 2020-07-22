import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
// - DELETE: `/transactions/:id`

// ## Core Deliverables

// - Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

class AccountContainer extends Component {
  state = { transactions: [] };

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then((r) => r.json())
      .then((transactions) => {
        this.setState({ transactions });
      });
  }

  onFormSubmit = (newItem) => {
    this.setState({
      transactions: [newItem, ...this.state.transactions],
    });
  };

  onSearch = (term) => {
    const filteredList = this.state.transactions.filter((trans) =>
      trans.description.includes(term)
    );
    this.setState({ transactions: filteredList });
  };
  render() {
    console.log(this.state.transactions);
    return (
      <div>
        <Search
          transactions={this.state.transactions}
          onSearch={this.onSearch}
        />
        <AddTransactionForm handleAdd={this.onFormSubmit} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
