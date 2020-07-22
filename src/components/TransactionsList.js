import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  
  const renderTransaction = () => {
    function compare(a, b) {

      const categoryA = a.category.toUpperCase();
      const categoryB = b.category.toUpperCase();
    
      let comparison = 0;
      if (categoryA > categoryB) {
        comparison = 1;
      } else if (categoryA < categoryB) {
        comparison = -1;
      }
      return comparison;
    }
    

    
    const filteredTransactions = props.transactions.filter( transaction => transaction.description.toLowerCase().includes(props.searchTerm) )
    
    filteredTransactions.sort(compare);

    return filteredTransactions.map(transaction => {
      return <Transaction 
        key={transaction.id} 
        date={transaction.date} 
        description={transaction.description}
        category= {transaction.category}
        amount={transaction.amount}
        />
  })
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
        {renderTransaction()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
