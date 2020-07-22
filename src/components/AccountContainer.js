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
    .then(r => r.json())
    .then(transactions => this.setState({transactions: transactions}))
  }

  addNewTransaction = (transaction) => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction)
    }
    fetch('http://localhost:6001/transactions', config)
    .then(r => r.json())
    .then(newTransaction => this.addToState(newTransaction))
  }

  addToState = (newTransaction) => {
    this.setState({
      transactions: [...this.state.transactions, newTransaction]
    })
  }

  getSearchTerm = (search) => {
    const searchTerm = search.target.value
    this.setState({
      searchTerm: searchTerm
    })
  }

  filterTransactions = () => {
    //this is case sensitive which may not be ideal, consider refactor
    const searchTerm = this.state.searchTerm
    const filtered = this.state.transactions.filter(t => t.description.includes(searchTerm))
    return filtered
  }

  render() {
    return (
      <div>
        <Search getSearchTerm={this.getSearchTerm}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList transactions={this.filterTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
