import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  state = {
    transactions: [],
    searchTerm: ''
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

  render() {
    let filterTransactions = this.state.transactions.filter(trans => trans.description.includes(this.state.searchTerm))
    return (
      <div>
        <Search setSearchTerm={this.setSearchTerm}/>
        <AddTransactionForm handleSaveData={this.handleSaveData}/>
        <TransactionsList transactions={filterTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
