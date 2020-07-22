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

  handleSearch = (e) => {
    const searchTerm = e.target.value
    this.setState({
      search: searchTerm
    })
  }

  filteredTransactions = () => {
    // const transactions = this.state.transactions
    // const searchTerm = this.state.search
    let filteredTransactions = [...this.state.transactions]
    console.log(filteredTransactions)
    // filteredTransactions.filter(transaction => {
    //   if (transaction.description.includes(this.state.search)) {
    //     return true
    //   } 
    // })
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm handleChange={this.handleChange} addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
