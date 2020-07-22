import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date:'',
    description: '',
    category: '',
    amount: '',

  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    //console.log(event.target.name, event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(savedData => {
      this.props.handleSaveData(savedData)
    })
    
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form" >
          <div className="inline fields">
            <input onChange={this.handleInput} type="date" name="date" value={this.state.date}/>
            <input onChange={this.handleInput} type="text" name="description" placeholder="Description" value={this.state.description}/>
            <input onChange={this.handleInput} type="text" name="category" placeholder="Category" value={this.state.category}/>
            <input onChange={this.handleInput}
              type="number"
              name="amount"
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
