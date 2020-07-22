import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
      .then(res => res.json())
      .then(transactions => this.setState({transactions}))
  }

  renderNewTransaction = newTxn => {
    this.setState({transactions: [...this.state.transactions, newTxn]})
  }

  removeTxn = id => {
    const updatedList = this.state.transactions.filter(txn => txn.id !== id)
    this.setState({transactions: updatedList})
  }

  handleSearchChange = event => {
    this.setState({searchTerm: event.target.value})
  }

  filterTransactions = () => {
    const filteredResults = this.state.transactions.filter(txn => {
      return txn.description.toLowerCase()
      .includes(this.state.searchTerm.toLowerCase())
    })
    return filteredResults
  }

  render() {
    return (
      <div>
        <Search handleSearchChange={this.handleSearchChange} searchTerm={this.state.searchTerm}/>
        <AddTransactionForm renderNewTransaction={this.renderNewTransaction}/>
        <TransactionsList transactions={this.filterTransactions()} removeTxn={this.removeTxn}/>
      </div>
    );
  }
}

export default AccountContainer;