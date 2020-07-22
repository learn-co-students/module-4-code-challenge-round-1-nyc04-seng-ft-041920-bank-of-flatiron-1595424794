import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {

  state = {
    transaction: []
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then(r => r.json())
      .then(transaction => {
        this.setState({transaction})
      })
  }

  renderTransaction() {
    return this.state.transaction.map(transaction => 
    <Transaction 
    key={transaction.id}
    date={transaction.date}
    description={transaction.description}
    category={transaction.category}
    amount={transaction.amount} 
    />
    )
  }

  render () {
    console.log(this.state)
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {this.renderTransaction()}
      </tbody>
    </table>
  );
  }
};

export default TransactionsList;
