import React from "react";
import { render } from "react-dom";

class Transaction extends React.Component {
  render() {

    const {date, description, category, amount} = this.props

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
  }
};

export default Transaction;
