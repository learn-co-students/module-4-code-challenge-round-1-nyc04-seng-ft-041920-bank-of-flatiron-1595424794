import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  const filteredTransactions = () => { 
  const findTransaction = props.transactions.filter (transactions => transactions.description.includes(props.searchTerm.toLowerCase()))
  return findTransaction.map(transactions=>
          <Transaction 
          key={transactions.id}
          id={transactions.id}
          date={transactions.date}
          description={transactions.description}
          category={transactions.category}
          amount={transactions.amount}
          />
        )
      }

// const renderTransactions = () => { 
//       return props.transactions.map(transactions=>
//         <Transaction 
//         key={transactions.id}
//         id={transactions.id}
//         date={transactions.date}
//         description={transactions.description}
//         category={transactions.category}
//         amount={transactions.amount}
//         />
//       )
//     }



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
        {filteredTransactions()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
