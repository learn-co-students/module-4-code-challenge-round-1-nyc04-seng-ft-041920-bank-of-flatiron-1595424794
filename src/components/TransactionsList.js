import React from "react";
import Transaction from "./Transaction";
import {Consumer} from './context'

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
          <th>
            <h3 className="ui center aligned header">Hide from Mom</h3>
          </th>
        </tr>
        <Consumer>
          {({transactions, search}) => {
            const filteredTrx = transactions.filter(trx => trx.description.includes(search))
            console.log(filteredTrx)
            return (
              <React.Fragment>
                {filteredTrx.map((trx, index) =>
                  <Transaction
                    filteredTrx={filteredTrx}
                    index={index}
                    key={trx.id}
                  />
                )}
              </React.Fragment>
            )
          }}

        </Consumer>
      </tbody>
    </table>
  );
};

export default TransactionsList;
