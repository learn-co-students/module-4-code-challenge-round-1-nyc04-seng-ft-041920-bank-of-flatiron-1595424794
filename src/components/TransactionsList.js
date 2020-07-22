import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  const renderTransactions = () => {
    return props.transactions.map(t => {
      return <Transaction 
        key={t.id}
        id={t.id}
        amount={t.amount}
        category={t.category}
        date={t.date}
        description={t.description}
        handleDelete={props.handleDelete}
      />}
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
          <th>
            <h3 className="ui center aligned header">Remove</h3>
          </th>
        </tr>
        {renderTransactions()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
