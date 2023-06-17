import React from "react";

const SearchBar = (props) => {
    return(
        <div className="col col-sm-4">
            <input className="form-control"
            value={props.value} 
            onChange={(event) => props.setSearch(event.target.value)}
            placeholder="search film"></input>
        </div>
    
        )

}
export default SearchBar;