import React, { Component } from "react";
import {Consumer} from './context'


class AddTransactionForm extends Component {
  // create your ref here
  trxDateInput = React.createRef()
  trxDescInput = React.createRef()
  trxCategoryInput = React.createRef()
  trxAmountInput = React.createRef()

  render() {
    return (
      <Consumer>
        {({transactions, actions}) => {
          const handleSubmit = (e) => {
            e.preventDefault()
            // need to get the ID of a new TRX
            const trxId = parseInt(transactions[transactions.length -1].id)
            const obj = {
              id: (trxId + 1),
              date: this.trxDateInput.current.value,
              description: this.trxDescInput.current.value,
              category: this.trxCategoryInput.current.value,
              amount: this.trxAmountInput.current.value
            }
            actions.addTrx(obj)
          }

          return (
            <div className="ui segment">
              <form onSubmit={handleSubmit} className="ui form">
                <div className="inline fields">
                  <input type="date" name="date" ref={this.trxDateInput} />
                  <input type="text" name="description" placeholder="Description" ref={this.trxDescInput} />
                  <input type="text" name="category" placeholder="Category" ref={this.trxCategoryInput} />
                  <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    step="0.01"
                    ref={this.trxAmountInput}
                  />
                </div>
                <button className="ui button" type="submit">
                  Add Transaction
                </button>
              </form>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default AddTransactionForm;
