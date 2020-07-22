import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    searchTerm: "",
    transaction: []
  }
  
  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then(r => r.json())
    .then(transaction => {
      this.setState({
        transaction: transaction
      })
    })
  }

  addSubmit = newSubmit => {
    this.setState({
      transaction: [newSubmit, ...this.state.transaction]
    })
  }

  handleTheSearch = searchTerm => {
    this.setState({
      searchTerm: searchTerm
    })
  }





  render() {
    // console.log(this.state)
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} setSearchTerm={this.handleTheSearch}/>
        <AddTransactionForm handleAddSubmit={this.addSubmit}/>
        <TransactionsList transaction={this.state.transaction}/>
      </div>
    );
  }
}

export default AccountContainer;
