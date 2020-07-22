import React from "react";
import Transaction from "./Transaction";
import AccountContainer from "./AccountContainer"
const TransactionsList = (props) => {
  // console.log(props)
  function renderTransaction() {
    
    return (props.transactions.map((transaction) => {
     return <Transaction
      key={transaction.id}
      id={transaction.id}
      date={transaction.date}
      description={transaction.description}
      category={transaction.category}
      amount={transaction.amount}
      />
    }))
  }
  
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <td>
            <h3 className="ui center aligned header">Date</h3>
          </td>
          <td>
            <h3 className="ui center aligned header">Description</h3>
          </td>
          <td>
            <h3 className="ui center aligned header">Category</h3>
          </td>
          <td>
            <h3 className="ui center aligned header">Amount</h3>
          </td>
        </tr>
        {/* render Transactions here */}
        {renderTransaction()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
