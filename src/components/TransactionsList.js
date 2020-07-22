import React from "react";
import Transaction from "./Transaction";

const TransactionsList = () => {
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
       {/* /* const renderTransactions = () => return props.transactions.map{ transactions*/ /** this is where we would usually post but where do i post or what do i want to access here */} 
      </tbody>
    </table>
  );
};

export default TransactionsList;
