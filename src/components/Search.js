import React, {Component} from "react";
import { render } from "react-dom";

class Search extends Component{
  
  state = {
    search: null
  }

  renderFilteredResults = (event) => {
    this.setState({
      search: event.target.value
      })
  }

  render() {
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={renderFilteredResults()}
        />
        <i className="circular search link icon"></i>
      </div>
    );
  }  
};

export default Search;
