import React from "react";

const Transaction = (props) => {
  const handleDelete = (id) => {
    props.onDelete(id);
    const payLoad = {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(
      `http://localhost:6001/transactions/${props.transaction.id}`,
      payLoad
    );
  };
  const { amount, category, date, description } = props.transaction;
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={() => handleDelete(props.transaction.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Transaction;
