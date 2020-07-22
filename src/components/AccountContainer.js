import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  state = {
    transactions: []
  }
  
  
  componentDidMount() {
    
    fetch(`http://localhost:6001/transactions`)
    .then(r => r.json())
    .then(theData =>  this.setState({ 
      transactions: theData
    }))
  }
  
  getTransactions() {
    return this.state.transactions.filter(transactions => transactions.completed)
    const completedTransactions = this.getTransactions()
  }
  
  
  
  
  
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList />
      </div>
    );
  }
}

export default AccountContainer;
