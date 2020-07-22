import React from "react";
import {Consumer} from './context'

const Transaction = ({filteredTrx, index}) => {
  return (
    <Consumer>
      {/*  it was just like the mock todo! */}
      {/* we filter through these tasks, but if we had the state from our context + the index we pass in, of course we get the wrong transactions back, unless you pass the filtered transactions in as a prop */}
      {({actions}) =>
        <tr>
          <td>{filteredTrx[index].date}</td>
          <td>{filteredTrx[index].description}</td>
          <td>{filteredTrx[index].category}</td>
          <td>{filteredTrx[index].amount}</td>
          <td><button onClick={() => actions.deleteTrx(filteredTrx[index].id)}>Hide from Mom</button></td>
        </tr>
      }
    </Consumer>
  );
};

export default Transaction;
