import React from "react";

const Transaction = ({id, date, description, category, amount, removeTxn}) => {
  
  const deleteTxn = () => {
    fetch(`http://localhost:6001/transactions/${props.id}`, {method: 'DELETE'})
      .then(removeTxn(props.id))
  }
  
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={deleteTxn}>Delete</button></td>
    </tr>
  );
};

export default Transaction;