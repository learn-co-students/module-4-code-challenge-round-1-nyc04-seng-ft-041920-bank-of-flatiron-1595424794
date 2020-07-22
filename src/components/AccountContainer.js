import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: []
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then(r => r.json())
      .then(transactions => {

        this.setState({
          transactions
        })
      })
  }

  searchEvent = (text) => {
    const filtered = this.state.transactions.filter((transaction) => {
      return transaction.description.includes(text)
    })
    this.setState({
      transactions: filtered
    })

  }


  render() {
    return (
      <div>
        <Search searchEvent={this.searchEvent} />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
