import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  
  state = {
    allTransactions: []
  }

  componentDidMount = () => {
    fetch("http://localhost:6001/transactions")
      .then(r => r.json())
      .then(allTransactions => {
         this.setState({allTransactions})
      }
      )
  }



  render() {

    console.log(this.state)

    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList allTransactions = {this.state.allTransactions}/>
      </div>
    );
  }
}

export default AccountContainer