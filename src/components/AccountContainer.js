import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: []
    // searchTerm: ""
  }

  componentDidMount() {
    fetch(`http://localhost:6001/transactions`)
    .then(r => r.json())
    .then(transactions => {
      this.setState({ 
        transactions 
      })
    })
  }

  addTransaction = (newTransaction) => {
    this.setState ({
      transactions: [...this.state.transactions, newTransaction]
    })
  }

  // handleSearchOnChange = (searchTerm) => {
  //   this.setState ({
  //     searchTerm
  //   })
  // }

  render() {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleSearchOnChange={this.handleSearchOnChange}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
