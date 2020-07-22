import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transaction: []
  }

  componentDidMount() {
   fetch("http://localhost:6001/transactions")
   .then(r => r.json())
   .then(transaction => {
     this.setState({ transaction })
   })
  }

  renderTransactions() {
    return  this.state.transactions.map(transaction =>
     <TransactionsList 
    date={transaction.date}
    description={transaction.description}
    category={transaction.category}
    amount={transaction.amount}
    />
    )
  }

  render() {
    
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList />
        
      </div>
    );
  }
}

export default AccountContainer;
