import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  // set state
  state = {
    transactions: [],
    searchTerm: ""
  }

  // initial fetch
  componentDidMount() {
    fetch("http://localhost:3000/transactions")
    .then(r => r.json())
    .then(transactions => {
      // set initial state
      this.setState({ transactions })
    })
  }

  // ===> using higher order fn in Search component <=== (it works)
  // set new searchTerm state 
  // handleSearchTermChange = (name, value) => {
  //   this.setState({
  //     [name]: value  // I initially wanted to use higher order fn but since searchTerm is so specific in this case I thought it wasn't necessary
  //   })
  // }

  // set new searchTerm state 
  handleSearchTermChange = value => {
    this.setState({
      searchTerm: value
    })
  } 

  deleteTransaction = id => {
    const filteredTransactions = this.state.transactions.filter(item => item.id !== id)

    this.setState(prevState => ({
      transactions: filteredTransactions
    }))
  }

  // add transaction to the list of transaction on UI
  addTransaction = (newTransaction) => {
    this.setState({ transactions: [newTransaction, ...this.state.transactions] })
  }

  // sort transactions alphabetically by category
  sortByCategory() {
    return this.state.transactions.sort((a,b) => a.category.localeCompare(b.category))  
  }

  render() {
    return (
      <div>
        <Search 
          searchTerm={this.state.searchTerm} 
          setSearchTerm={this.handleSearchTermChange}
          />

        <AddTransactionForm addTransaction={this.addTransaction}/>

        <TransactionsList 
          searchTerm={this.state.searchTerm} 
          transactions={this.sortByCategory()}
          deleteTransaction={this.deleteTransaction}
          />
      </div>
    );
  }
}

export default AccountContainer;
