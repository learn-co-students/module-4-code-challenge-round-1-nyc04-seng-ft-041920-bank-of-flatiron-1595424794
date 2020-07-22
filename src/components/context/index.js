import React, {Component} from 'react'

const BankContext = React.createContext()
export const Consumer = BankContext.Consumer

export class Provider extends Component {
 state = {
   // will this change if its all a big object?
   transactions: [],
   searchTerm: ""
 }

 componentDidMount() {
   fetch("http://localhost:6001/transactions")
   .then(r => r.json())
   .then(transactions => {
     this.setState({transactions})
   })
 }

  // is this redundant?
 fetchHelper() {
   fetch("http://localhost:6001/transactions")
   .then(r => r.json())
   .then(transactions => {
     this.setState({transactions})
   })
 }

 handleAddTrx = (obj) => {
  fetch("http://localhost:6001/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  }).then(r => r.json())
  .then(trx => {
    this.setState(prevState => {
      return {
        transactions: [
          ...prevState.transactions,
          trx
        ]
      }
    }, console.log('it wooooooorks'))
  })
 }

 handleFilter = (val) => {
  this.setState({searchTerm: val})
 }

 handleDelete = () => {
  console.log('hide the bills from mom!')
 }

 render() {
   return (
     <BankContext.Provider value={
       {
         transactions: this.state.transactions,
         search: this.state.searchTerm,
         actions: {
           addTrx:this.handleAddTrx,
           filterTrx: this.handleFilter,
           deleteTrx: this.handleDelete
         }
       }
     }>
        {this.props.children}
     </BankContext.Provider>
   )
 }
}
