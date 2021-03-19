import React, { useState } from "react";
import "../css/FilterBar.css";
import { Col } from "reactstrap";
import { SortPriority, SortStatus } from "./CustomSelect";
const FilterBar = ({
  onFilterTask,
  onSelectedSortBy,
  onFilter,
  onSelectedDirection,
}) => {
  return (
    <Col className="filterBar" xl="11" lg="11" md="12" sm="12" xs="12">
      <Col className="filterBar-left" xl="4" lg="4" md="4" sm="12" xs="12">
        <Col className="sortByStatus">
          <label htmlFor="sort-status">Sort by: </label>
          <SortStatus onSelectedSortBy={onSelectedSortBy} />
        </Col>
        <Col className="sortByPriority">
          <label htmlFor="sort-priority">Direction:</label>
          <SortPriority onSelectedDirection={onSelectedDirection} />
        </Col>
      </Col>
      <Col className="filterBar-right" xl="8" lg="8" md="8" sm="12" xs="12">
        <div className="checkFilter">
          <label htmlFor="filter">Filter: </label>
          <input type="checkbox" onChange={(e) => onFilter(e.target.value)} />
        </div>
        <div className="fromDate">
          <label htmlFor="fromDate">From: </label>
          <input type="date" />
        </div>
        <div className="toDate">
          <label htmlFor="toDate">To: </label>
          <input type="date" />
        </div>
        <button onClick={onFilterTask}>Apply</button>
      </Col>
    </Col>
  );
};

export default FilterBar;
