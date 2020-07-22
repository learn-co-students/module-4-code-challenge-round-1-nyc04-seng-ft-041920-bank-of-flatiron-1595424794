import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

state = {
  trans: []
}

componentDidMount() {
  fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    // .then(accountsArr => console.log(transArr))
     .then(transArr => {this.setState({accounts:transArr})
  })
}


  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        key = {this.props.transArr}
        id = {this.props.transArr}
        <TransactionsList />
      </div>
    );
  }
}

export default AccountContainer;
