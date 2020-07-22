import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    search: ""
  }

  // Fetch list of current Transactions
  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
     .then(resp => resp.json())
     .then(data => {
        this.setState({
          transactions: data
        })
     });
  }

  // Create a New Transaction
  addNewTransaction = newTrans => {
    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTrans]
    }))
  }

  // Search for specific items based on description 
  searchByDescription = desc => {
    this.setState({
      search: desc
    })
  }

  // Render shit
  render() {
    return (
      <div>
        <Search search={this.state.search} searchByDesc={this.searchByDescription}/>
        <AddTransactionForm handleNewTransaction={this.addNewTransaction} />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
