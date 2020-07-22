import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ""
  }

  componentDidMount() {
    fetch(`http://localhost:6001/transactions`)
      .then(r => r.json())
      .then(transactionsData => this.setState({
        transactions: transactionsData
      }))
  }

  addTransaction = (newTransaction) => {
    fetch('http://localhost:6001/transactions', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction)
    })
      .then(r => r.json())
      .then(newTransaction => this.setState({
        transactions: [...this.state.transactions, newTransaction]
      }))
  }

  handleSearch = (term) => {
    this.setState({
      search: term
    })
  }

  filterTransactions = (term) => {
    let filteredTransactions = this.state.transactions
    filteredTransactions = filteredTransactions.filter(transaction => transaction.description.includes(term))
    return filteredTransactions
  }

  render() {
    console.log(this.state.search)
    console.log(this.filterTransactions(this.state.search))
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm handleChange={this.handleChange} addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.filterTransactions(this.state.search)}/>
      </div>
    );
  }
}

export default AccountContainer;
