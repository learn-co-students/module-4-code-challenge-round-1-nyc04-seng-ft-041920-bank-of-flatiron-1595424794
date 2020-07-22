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
  handleSearchByDescription = search => {
    this.setState({search})
  }

  // Render shit
  render() {
    console.log(this.state.search)
   
    return (
      <div>
        <Search search={this.state.search} handleSearchByDesc={this.handleSearchByDescription}/>
        <AddTransactionForm handleNewTransaction={this.addNewTransaction} />
        <TransactionsList transactions={this.state.transactions} search={this.state.search} />
      </div>
    );
  }
}

export default AccountContainer;
