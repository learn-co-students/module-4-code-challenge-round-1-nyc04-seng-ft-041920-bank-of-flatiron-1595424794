import React from "react";
import Transaction from "./Transaction";
import { render } from "react-dom";

class TransactionsList extends React.Component { //change function to class

  renderEachTransaction() {

    const allTransactions = this.props.allTransactions
    console.log(allTransactions)
    return allTransactions.map(eachTransaction => 
 
    <Transaction
      id = {eachTransaction.id}
      date = {eachTransaction.date}
      description= {eachTransaction.description}
      category={eachTransaction.category}
      amount= {eachTransaction.amount}
       />
    )
  }






  // console.log(this.props)//why the helllll this is not showing 
 render = () => {
//console.log(this.props.allTransactions)//helll yeaaa
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
       {this.renderEachTransaction()}
      </tbody>
    </table>
  )
  }
 }


export default TransactionsList;
