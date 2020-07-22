import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import SortSelect from "./SortSelect.js"
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: '',
    sortBy: ''
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
    //also maybe add a sort option like 'all' that reverts back to showing all
    const searchTerm = this.state.searchTerm
    const sortBy = this.state.sortBy
    const filtered = this.state.transactions.filter(t => t.description.includes(searchTerm))
    if (sortBy !== '') {
      filtered.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)
    }
    return filtered
  }

  getSort = (sortBy) => {
    this.setState({
      sortBy: sortBy.target.value
    })
  }

  handleDelete = (id) => {
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(this.deleteFromState(id))
  }

  deleteFromState = (id) => {
    const filtered = this.state.transactions.filter(t => t.id !== id)
    this.setState({
      transactions: filtered
    })
  }

  render() {
    return (
      <div>
        <SortSelect getSort={this.getSort}/>
        <Search getSearchTerm={this.getSearchTerm}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList handleDelete={this.handleDelete} transactions={this.filterTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
