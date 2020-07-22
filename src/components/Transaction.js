import React from "react";

const Transaction = () => {
  return (
    <tr>
      <td>{this.date}</td>
      <td>{this.description}</td>
      <td>{this.category}</td>
      <td>{this.amount}</td>
    </tr>
  );
};

export default Transaction;
