import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  const handleSortAlphabetically = () => {
    const sortedList = props.transactions.sort((a, b) => {
      return a.description.localeCompare(b.description);
    });
    // console.log(props);
    props.sortList(sortedList);
  };

  const handleSortCategory = () => {
    const sortedList = props.transactions.sort((a, b) => {
      return a.category.localeCompare(b.category);
    });
    // console.log(props);
    props.sortList(sortedList);
  };

  const renderTrans = () => {
    if (props.filtered.length > 0) {
      return props.filtered.map((trans) => {
        return (
          <Transaction
            transaction={trans}
            key={trans.id}
            onDelete={props.onDelete}
          />
        );
      });
    } else {
      return props.transactions.map((trans) => {
        return (
          <Transaction
            transaction={trans}
            key={trans.id}
            onDelete={props.onDelete}
          />
        );
      });
    }
  };

  return (
    <>
      <button onClick={handleSortAlphabetically}>Sort Alphabetically</button>
      <br></br>
      <button onClick={handleSortCategory}>Sort Category </button>
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
              <h3 className="ui center aligned header">Delete</h3>
            </th>
          </tr>
          {renderTrans()}
        </tbody>
      </table>
    </>
  );
};

export default TransactionsList;
