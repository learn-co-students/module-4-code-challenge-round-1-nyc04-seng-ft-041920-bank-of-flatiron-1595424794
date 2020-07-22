import React from "react";

const Transaction = (props) => {
  const { id, amount, category, date, description} = props

  const handleDeleteClick = (id) => {
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(resp => props.handleDelete(id))
  }
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={() => handleDeleteClick(id)} className="ui button red">X</button></td>
    </tr>
  );
};

export default Transaction;
