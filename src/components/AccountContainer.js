import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchTerm: ""
  }
  
  componentDidMount() {
      fetch("http://localhost:6001/transactions")
      .then(response => response.json())
      .then(transactions => {
        this.setState({ transactions: transactions })
      })
    }

    handleSearch = (event) => {
      this.setState({
        ...this.state, searchTerm: event.target.value
      }, console.log(this.state.searchTerm))
    }
  
    render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default AccountContainer;
