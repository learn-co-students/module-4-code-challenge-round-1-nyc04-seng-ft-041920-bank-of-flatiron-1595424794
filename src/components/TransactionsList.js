import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  console.log(props.data)
  const transactionRows = props.data.map(transaction => 
    <Transaction
       key = {props.data.id}
       date = {props.data.date}
       description = {props.data.transaction}
       category = {props.data.category}
       amount = {props.data.amount}
    />
  )
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
        {transactionRows}
      </tbody>
    </table>
  );
};

export default TransactionsList;
