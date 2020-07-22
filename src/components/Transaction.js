import React from "react";
import { render } from "react-dom";

class Transaction extends React.Component {
  //console.log("TRANSACTION")
  //console.log(this.props)
  render(){
    console.log(this.props.description) //helll yaaa
  return (
    <tr>
      <td>{this.props.date}</td>
      <td>{this.props.description}</td>
      <td>{this.props.category}</td>
      <td>{this.props.amount}</td>
    </tr>
    )
  }
}

export default Transaction;
