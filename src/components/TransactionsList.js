import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  //   "id": 1,
  //   "date": "2019-12-01",
  //   "description": "Paycheck from Bob's Burgers",
  //   "category": "Income",
  //   "amount": 1000

  // },

  // console.log(`Transactions Search Comparison: `, props.search)

  const renderFilteredTransactions = () => {
    let filtered = props.transactions.filter(transaction => {
      return transaction.description
        .toLowerCase()
        .includes(props.search.toLowerCase())
    })

    return filtered;
  }

  // console.log("Props Success; List-", props);
  const renderTransactions = () => {
    return renderFilteredTransactions().map(
      transaction => <Transaction 
        key={transaction.id} 
        transaction = {transaction} 
      />
    )
  }

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
        {renderTransactions()}
        {/* {console.log("Transactions List Success")} */}
      </tbody>
    </table>
  );
};

export default TransactionsList;



