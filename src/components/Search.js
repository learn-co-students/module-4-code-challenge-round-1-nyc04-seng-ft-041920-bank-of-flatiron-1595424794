import React from "react";
import {Consumer} from './context'

const Search = () => {
  const searchInput = React.createRef()

  return (
    <Consumer>
      {({search, actions}) => {
        const getSearchWord = () => {
          actions.filterTrx(searchInput.current.value)
        }
        return (
          <div className="ui large fluid icon input">
            <input
              type="text"
              placeholder={"Search your Recent Transactions"}
              onChange={getSearchWord}
              ref={searchInput}
            />
            <i className="circular search link icon"></i>
          </div>
        )
      }}

    </Consumer>
  );
};

export default Search;
