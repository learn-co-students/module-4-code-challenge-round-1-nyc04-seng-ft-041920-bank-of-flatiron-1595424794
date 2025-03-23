import React, { Component } from "react";

class AddTransactionForm extends Component {

  state={
    date: '',
    description: '',
    category: '',
    amount: '',
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    //fetch to updat
    const dataObj={
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    }
    fetch('http://localhost:6001/transactions',dataObj)
      .then(r=>r.json())
      .then(transObj =>{
        //update Transactions array
        this.props.updateSubmit(transObj)
        console.log("fetch to update : ",transObj)
      })

  }

  handleInput=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    },()=>console.log("AddTransactionForm : ",this.state))
  }

  render() {
    // console.log(this.props.updateSubmit)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleInput}/>
            <input type="text" name="description" value={this.state.description} onChange={this.handleInput} placeholder="Description" />
            <input type="text" name="category" value={this.state.category} onChange={this.handleInput} placeholder="Category" />
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.handleInput}
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
