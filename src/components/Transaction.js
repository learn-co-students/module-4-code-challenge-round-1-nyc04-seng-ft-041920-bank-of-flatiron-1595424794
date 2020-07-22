import React from "react";

const Transaction = (props) => {
  const { date, description, category, amount } = props.transaction;

  const deleteTransaction = () => {
    fetch(`http://localhost:6001/transactions/${props.transaction.id}`, {
      method: "DELETE",
    });

    props.removeTransaction(props.transaction);
  };

  return (
    <tr onClick={deleteTransaction}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
