import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
// - DELETE: `/transactions/:id`

class AccountContainer extends Component {
  state = { transactions: [], filtered: [] };

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then((r) => r.json())
      .then((transactions) => {
        this.setState({ transactions });
      });
  }

  onFormSubmit = (newItem) => {
    this.setState({
      filtered: [newItem, ...this.state.transactions],
    });
  };

  onSearch = (term) => {
    const filteredList = this.state.transactions.filter((trans) =>
      trans.description.includes(term)
    );
    this.setState({ filtered: filteredList });
  };

  onDelete = (id) => {
    const newList = this.state.transactions.filter((trans) => trans.id !== id);
    this.setState({ transactions: newList });
  };

  sortList = (newList) => {
    this.setState({ transactions: newList });
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
        <TransactionsList
          transactions={this.state.transactions}
          filtered={this.state.filtered}
          onDelete={this.onDelete}
          sortList={this.sortList}
        />
      </div>
    );
  }
}

export default AccountContainer;
