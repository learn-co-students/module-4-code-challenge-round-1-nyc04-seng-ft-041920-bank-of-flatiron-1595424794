import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(r => r.json())
    .then(transactions => this.setState({transactions}))
  }

  addTransaction = (newTransaction) => {
    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction]
    }))
  }

  filterTransactions = (searchTerm) => {
    this.setState({ searchTerm })
  }

  filteredTransactions = () => {
    // look through the state to find transactions that match
    return this.state.transactions.filter(t => {
      return t.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.filterTransactions}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.filteredTransactions()}/>
      </div>
    );
  }
}

export default AccountContainer;
