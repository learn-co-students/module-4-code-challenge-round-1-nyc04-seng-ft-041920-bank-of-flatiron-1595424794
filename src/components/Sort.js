import React from 'react'

const Sort = ({handleSortChange}) => {

    return (
        <div>
          <label>Sort by Description 
            <input name="description" type="checkbox" onChange={handleSortChange}/>
          </label>
          <label>Sort by Category 
            <input name="category" type="checkbox" onChange={handleSortChange}/>
          </label>
        </div>
    )
}

export default Sort