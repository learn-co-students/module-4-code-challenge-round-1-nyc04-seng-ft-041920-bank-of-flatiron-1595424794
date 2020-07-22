import React from "react";

const Transaction = (props) => {

  let deleteHandler = (event) => {
    fetch(`http://localhost:6001/transactions/${props.transaction.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      }
    }).then(resp => resp.json())
    .then(deletedData => {
      props.deleteHandler(props.transaction.id)
    })
  }

  return (
    <tr>
      <td><button onClick={deleteHandler} style={{"backgroundColor": "red"}}>Delete</button>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
    </tr>
  );
};

export default Transaction;
