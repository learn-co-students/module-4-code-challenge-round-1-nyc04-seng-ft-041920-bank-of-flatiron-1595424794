import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from './Sort'

class AccountContainer extends Component {
  
  state = {
    transactions: [],
    searchTerm: '',
    sort: ''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }

  handleSaveData = (newData) => {
    this.setState(prevState => {
      return {
        transactions: [...prevState.transactions, newData]
      }
    })
  }

  setSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
  }

  setSort = (val) => {
    this.setState({
      sort: val
    })
  }

  deleteHandler = (id) => {
    let updatedList = this.state.transactions.filter(trans => trans.id != id)
    this.setState({
      transactions: updatedList
    })
  }

  render() {
    let filterTransactions = this.state.transactions.filter(trans => trans.description.includes(this.state.searchTerm))
    // for case sensitive: trans.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    let sortedItems = filterTransactions;
    if(this.state.sort){
      filterTransactions.sort((a,b) => a[this.state.sort].localeCompare(b[this.state.sort]))
    }
    return (
      <div>
        <Search setSearchTerm={this.setSearchTerm}/>
        <AddTransactionForm handleSaveData={this.handleSaveData}/>
        <Sort setSort={this.setSort} selected={this.state.sort}/>
        <TransactionsList transactions={sortedItems} deleteHandler={this.deleteHandler}/>
      </div>
    );
  }
}

export default AccountContainer;
