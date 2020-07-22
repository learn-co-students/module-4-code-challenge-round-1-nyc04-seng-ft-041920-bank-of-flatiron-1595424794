import React from "react";

const Transaction = (props) => {
  const transaction = props.trans
  // console.log(transaction)
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
};

export default Transaction;
