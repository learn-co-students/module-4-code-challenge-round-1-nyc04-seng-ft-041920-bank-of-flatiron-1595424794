import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state={
    transactions: [],
    searchTerm: ''
  }
 
  handleSearch = (searchTerm) =>{
    this.setState({searchTerm: searchTerm},()=>console.log("handleSearch : ",this.state.searchTerm))
    this.filterTransactions()
  }

  addTransactions=(transactionObj)=>{
    this.setState(preState =>({
      transactions: [transactionObj, ...preState.transactions]
    }),()=>console.log("addTransaction : ",this.state))
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
      .then(r=>r.json())
      .then(transArray =>{
        this.setState({
          transactions: transArray
        },()=>console.log("componentDidMount : ",this.state))
      })
  }

  filterTransactions=()=>{
    const filteredTransactions = this.state.transactions.filter(trans => {
      return trans.description
      .toLowerCase()
      .includes(this.state.searchTerm.toLowerCase())
    })
    // console.log("Filtered : ", filteredTransactions)
    return filteredTransactions
  }

  render() {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} />
        <AddTransactionForm updateSubmit={this.addTransactions}/>
        <TransactionsList transactions={this.filterTransactions()}/>
      </div>
    );
  }
}

export default AccountContainer;
