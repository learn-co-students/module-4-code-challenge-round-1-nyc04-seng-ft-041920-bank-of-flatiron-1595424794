import React from "react";

const Transaction = (props) => {

  // console.log(`Props List:
  // Date: ${props.date}
  // Description:${props.description}
  // Category: ${props.category}
  // Amount: ${props.amount}
  // `)

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
