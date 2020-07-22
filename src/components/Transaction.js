import React from "react";

const Transaction = (props) => {

  const { date, description, category, amount} = props.transaction


  // console.log(`Props List:
  // Date: ${date}
  // Description:${description}
  // Category: ${category}
  // Amount: ${amount}
  // `, date, description, category, amount)



  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
