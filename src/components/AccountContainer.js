import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchTerm: "",
    date: "",
    amount: 0,
    description: "",
    category: ""
    
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
  
    handleFormInput = (event) => {
      this.setState({
        ...this.state,
        [event.target.name]:[event.target.value]
      })
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const bodyData = {
        date: event.target.date.value,
        amount: event.target.amount.value,
        description: event.target.description.value,
        category: event.target.category.value
      }
      console.log(bodyData)
      fetch("http://localhost:6001/transactions", {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
        })
        .then(response => response.json())
        .then(newTrans => {
          this.setState({
            ...this.setState, transactions: [...this.state.transactions, newTrans]
          })
        })
    }
    render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} />
        <AddTransactionForm 
          date={this.state.date} 
          description={this.state.description} 
          category={this.state.category} 
          amount={this.state.amount} 
          handleFormInput={this.handleFormInput}
          handleSubmit={this.handleSubmit}
        />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default AccountContainer;
