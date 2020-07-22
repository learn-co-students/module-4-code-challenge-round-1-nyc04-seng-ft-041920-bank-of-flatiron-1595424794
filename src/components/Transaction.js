import React from "react";

const Transaction = ({id, date, description, category, amount, removeTxn}) => {
  
  const deleteTxn = () => {
    fetch(`http://localhost:6001/transactions/${id}`, {method: 'DELETE'})
      .then(removeTxn(id))
  }
  
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button style={{background: 'red', color: 'white'}} onClick={deleteTxn}>X</button></td>
    </tr>
  );
};

export default Transaction;