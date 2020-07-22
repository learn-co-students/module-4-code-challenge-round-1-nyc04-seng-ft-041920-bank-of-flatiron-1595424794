import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
//   "id": 1,
//   "date": "2019-12-01",
//   "description": "Paycheck from Bob's Burgers",
//   "category": "Income",
//   "amount": 1000

// },

  // console.log("Props Success; List-", props);
  const renderTransactions = () => {
    return props.transactions.map(
      transaction => <Transaction 
        key={transaction.id} 
        date={transaction.date} 
        description={transaction.description} 
        category={transaction.category} 
        amount={transaction.amount} 
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
        {/* render Transactions here */}
        {renderTransactions()}
        {/* {console.log("Transactions List Success")} */}
      </tbody>
    </table>
  );
};

export default TransactionsList;



