import React from "react";

const Transaction = (props) => {
  const transaction = props.trans
  // console.log(transaction)
  const handleClick =(e)=>{
    const dataObj={
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},

    }

    fetch(`http://localhost:6001/transactions/${props.trans.id}`, dataObj)
      .then(r=>r.json())
      .then(console.log)
    
      props.deleteTransaction(props.trans.id)
  }
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
      <button className="ui button" type="click" onClick={handleClick}>
            delete
      </button>
      </td>
    </tr>
  );
};

export default Transaction;
