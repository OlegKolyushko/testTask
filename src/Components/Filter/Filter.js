import React from "react";
import PropTypes from "prop-types";
import '../Filter/filter.scss';

export default function Filter({ value, handlerFilter }) {
  return (
    <div className="filter">
      <p className="filter-text">Search Users:</p>
      <label className="filter-label">
        <input
          type="text"
          value={value}
          onChange={(e) => handlerFilter(e.target.value)}
          placeholder="Search user by name"
          className="filter-input"
        ></input>
      </label>
    </div>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handlerFilter: PropTypes.func.isRequired,
};


