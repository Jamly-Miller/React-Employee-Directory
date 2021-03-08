import React, { useContext } from "react";
import "../styles/styles.css";
import DataAreaContext from "../utils/DataAreaContext";

const SearchName = () => {
  const context = useContext(DataAreaContext);

  return (
      <div className="input-group">
          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search by First Name or Last Name"
          onChange={e => context.handleSearchChange(e)}
        />
      </div>
  );
}
export default SearchName;