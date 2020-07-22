import React from "react";
import './Transaction.css';

const Transaction = (props) => {

  const { id, date, description, category, amount } = props

  const handleDelete = () => {
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE"
    })
    // optimistic approach
    props.deleteTransaction(id)
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button className="btn-red" onClick={handleDelete}>Delete</button></td>
    </tr>
  );
};

export default Transaction;
