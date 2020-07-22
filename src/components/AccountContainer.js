import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  // set state
  state = {
    transactions: [],
    searchTerm: ""
  }

  // initial fetch
  componentDidMount() {
    fetch("http://localhost:3000/transactions")
    .then(r => r.json())
    .then(transactions => {
      // set initial state
      this.setState({ transactions })
    })
  }

  handleSearchTermChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  // add transaction to the list of transaction on UI
  addTransaction = (newTransaction) => {
    this.setState({ transactions: [newTransaction, ...this.state.transactions] })
  }

  render() {
    console.log("AccountContainer ======> ", this.state.searchTerm)
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} setSearchTerm={this.handleSearchTermChange}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList searchTerm={this.state.searchTerm} transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
