import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  constructor(){
    super()
    this.state = {
      transactions: [],
      searchInput: ""
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  

  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
    .then(response => response.json())
    .then(transactionsArr => this.setState({
      transactions: transactionsArr
    }))
  }

  handleSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  
  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <Search handleSearch={this.handeSearch}/>
        <AddTransactionForm />
        <TransactionsList data={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
