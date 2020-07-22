import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  const renderTransactions = () => {
    const filteredTransactions = props.transactions.filter(transaction => transaction.description.toLowerCase().includes(props.searchTerm.toLowerCase()))
    
    return filteredTransactions.map(item => 
      <Transaction 
        key={item.id}
        id={item.id}
        date={item.date}
        description={item.description}
        category={item.category}
        amount={item.amount}
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
      </tbody>
    </table>
  );
};

export default TransactionsList;
