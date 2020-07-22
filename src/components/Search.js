import React from "react";

class Search extends React.Component {
  state = {
    searchTerm: "",
  };

  onInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
    this.props.onSearch(e.target.value);
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        />
        <i className="circular search link icon"></i>
      </div>
    );
  }
}

export default Search;
