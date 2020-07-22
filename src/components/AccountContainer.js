import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: '',
    sortBy: ''
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

  handleCheckboxChange = event => {
    event.target.checked ? this.setState({sortBy: event.target.name}): this.setState({sortBy: ''})
  }

  filterTransactions = () => {
    const filteredResults = this.state.transactions.filter(txn => {
      return txn.description.toLowerCase()
      .includes(this.state.searchTerm.toLowerCase())
    })
    if(this.state.sortBy !== '') {
      filteredResults.sort((a,b) => {
        if(a[this.state.sortBy].toLowerCase() > b[this.state.sortBy].toLowerCase()) {return 1}
        else if(a[this.state.sortBy].toLowerCase() < b[this.state.sortBy].toLowerCase()) {return -1}
        else {return 0}
      })
    }
    return filteredResults
  }

  render() {
    console.log(this.state.sortBy)
    return (
      <div>
        <div>
          <label>Sort by Description 
            <input name="description" type="checkbox" onChange={this.handleCheckboxChange}/>
          </label>
          <label>Sort by Category 
            <input name="category" type="checkbox" onChange={this.handleCheckboxChange}/>
          </label>
        </div>
        <Search handleSearchChange={this.handleSearchChange} searchTerm={this.state.searchTerm}/>
        <AddTransactionForm renderNewTransaction={this.renderNewTransaction}/>
        <TransactionsList transactions={this.filterTransactions()} removeTxn={this.removeTxn}/>
      </div>
    );
  }
}

export default AccountContainer;