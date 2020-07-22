import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchTerm: "",
  };

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then((resp) => resp.json())
      .then((transactions) => {
        this.setState({
          transactions: transactions,
        });
      });
  }

  addTransaction = (newTransaction) => {
    this.setState((prevState) => ({
      transactions: [...prevState.transactions, newTransaction],
    }));
  };

  handleSearch = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm,
    });
  };

  render() {
    return (
      <div>
        <Search
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
        />
        <AddTransactionForm handleAddTransaction={this.addTransaction} />
        <TransactionsList
          transactions={this.state.transactions}
          searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default AccountContainer;
