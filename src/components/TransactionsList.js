import React from "react";
import Transaction from "./Transaction";




const TransactionsList = () => {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          {/* {this.props.date} */}
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          {/* {this.props.description} */}
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          {/* {this.props.category} */}
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
         {/* {this.props.transaction}  */}
      </tbody>
    </table>
  );
};

export default TransactionsList;
