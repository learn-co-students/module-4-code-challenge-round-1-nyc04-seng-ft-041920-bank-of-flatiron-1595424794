import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    
  }

  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
    .then(response => response.json())
    .then(transactionsArr => this.setState({
      transactions: transactionsArr
    }))
  }


  
  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList data={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
