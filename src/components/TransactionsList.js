import React from "react";
import Transaction from "./Transaction";
import AccountContainer from "./AccountContainer";

class TransArr extends React.Component {

  state = {
    transArr: []
  }

}

const TransactionsList = () => {
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
        {this.state.data.map(item => (
                   <ListItem rowData={item} handleClick={this.getData}/>
              ))}
        {this.props.transArr}
      </tbody>
    </table>
  );
};

export default TransactionsList;
