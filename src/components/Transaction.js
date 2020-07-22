import React from "react";
import TransactionsList from "./TransactionsList"
const Transaction = (props) => {
  // console.log(props)

  return (
    <tr>
      
      <td>{props.date}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
    </tr>
  );
};

export default Transaction;
