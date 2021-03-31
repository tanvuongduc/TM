import React, { Component } from "react";
import "../CSS/Filter.css";
class Filter extends Component {
  hideOptionDate() {
    if (document.getElementById("from-date-box").style.display === "block") {
      document.getElementById("from-date-box").style.display = "none";
    } else {
      document.getElementById("from-date-box").style.display = "block";
    }
  }

  render() {
    return (
      <div className="contain-box">
        <div className="filter-box">
          <h4 className="my-task-title">My Tasks</h4>
          <div className="sort-by-bar">
            <div className="sort-by">
              <span className="sort-by-title">Sort by:</span>
              <select className="sort-select form-control shadow-none ">
                <option selected>Status </option>
                <option>Pending</option>
                <option>Progress</option>
                <option>Done</option>
              </select>
            </div>
            <div className="direction-box">
              <span className="direction-title">Direction:</span>
              <select className=" direction-select form-control shadow-none ">
                <option selected>DESC </option>
                <option>ASC</option>
              </select>
            </div>

            <div className="form-check">
              <label className="filter-title">Filter: </label>
              <input
                className="form-check-button"
                onClick={() => this.hideOptionDate()}
                type="checkbox"
                id="gridCheck1"
              />
            </div>
            <div className="from-date-box" id="from-date-box">
              <label>From: </label>
              <select className="date-filter form-control shadow-none ">
                <option selected>21-03-17 </option>
              </select>
              <label>To: </label>
              <select className="date-filter form-control shadow-none ">
                <option selected>21-04-17 </option>
              </select>
              <a className="btn-apply">Apply</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
