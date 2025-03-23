import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {
  state={
    sort:''
  }

  // console.log(deleteTransaction, transactions)
   renderTransactions=()=>{
    const sort = this.state.sort
    let sortTransactions = []
    if(sort !== ''){
      sortTransactions = this.props.transactions.sort((a,b)=> a[sort].localeCompare(b[sort]))
      console.log("sortTransactions : ",sortTransactions)
    }else{
      sortTransactions = [...this.props.transactions]
    }
    return sortTransactions.map(trans => <Transaction key={trans.id} trans={trans} deleteTransaction={this.props.deleteTransaction}/>)
  }

   handleSort=(e)=>{
    console.log(e.target.innerText)
    this.setState({
      sort: e.target.innerText.toLowerCase()
    })
  }
  render(){
    console.log(this.props)
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Date</h3>
            </th>
            <th>
              <h3 className="ui center aligned header" onClick={this.handleSort}>Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header" onClick={this.handleSort} >Category</h3>
            </th>
            <th>
              <h3 className="ui center aligned header" >Amount</h3>
            </th>
            <th>
              <h3 className="ui center aligned header" >Delete</h3>
            </th>
          </tr>
          {this.renderTransactions()}
        </tbody>
      </table>
    )
  }
}

export default TransactionsList;
