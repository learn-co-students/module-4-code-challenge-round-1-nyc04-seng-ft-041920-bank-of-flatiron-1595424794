import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  const renderTrans = () => {
    if (props.filtered.length > 0) {
      return props.filtered.map((trans) => {
        return <Transaction transaction={trans} key={trans.id} />;
      });
    } else {
      return props.transactions.map((trans) => {
        return <Transaction transaction={trans} key={trans.id} />;
      });
    }
  };
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
        {renderTrans()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
