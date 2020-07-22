import React from "react";

const Transaction = (props) => {
  const { id, date, description, category, amount } = props.transaction
  const handleDelete = props.handleDelete
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={() => handleDelete(id)}>delete</button></td>
    </tr>
  );
};

export default Transaction;
