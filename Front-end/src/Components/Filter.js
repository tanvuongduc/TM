import React, { Component } from "react";
import "../CSS/Filter.css";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: props.sort,
      tasks: props.tasks
    }
  }
  componentDidMount() {
    this.onSort()
  }
  hideOptionDate() {
    if (document.getElementById("from-date-box").style.display === "block") {
      document.getElementById("from-date-box").style.display = "none";
    } else {
      document.getElementById("from-date-box").style.display = "block";
    }
  }
  async onSort() {
    let sortArray = [0, 1, 2]
    let res = []

    await sortArray.forEach((v) => {
      let arr = []
      let arrSorted = []
      if (this.state.sort.sortBy === 'status') {
        arr = this.props.tasks.filter(task => {
          return task.status === v
        })
      }
      else {
        arr = this.props.tasks.filter(task => {
          return task.priority === v
        })
      }
      if (this.state.sort.direction === 'ASC') {
        arrSorted = arr.sort((a, b) => {
          let A = a.content.toUpperCase()
          let B = b.content.toUpperCase()
          if (A > B) {
            return 1
          }
          else if (A < B) {
            return -1
          }
          else {
            return 0
          }
        })
      }
      else {
        arrSorted = arr.sort((a, b) => {
          let A = a.content.toUpperCase()
          let B = b.content.toUpperCase()
          if (A < B) {
            return 1
          }
          else if (A > B) {
            return -1
          }
          else {
            return 0
          }
        })

      }
      res = res.concat(arrSorted)
    })
    if(!res.length)return
    this.setState({
      tasks: res
    })
    this.props.updateTasks(res, this.state.sort)
  }
  async onSortChange(ev) {
    let sort = {
      sortBy: ev.target.value,
      direction: this.state.sort.direction
    }
    await this.setState({
      sort: sort
    })
    this.onSort();
  }
  async onDirectionChange(ev) {
    let sort = {
      sortBy: this.state.sort.sortBy,
      direction: ev.target.value
    }
    await this.setState({
      sort: sort
    })
    this.onSort();
  }
  render() {
    return (
      <div className="contain-box">
        <div className="filter-box">
          <h4 className="my-task-title">My Tasks</h4>
          <div className="sort-by-bar">
            <div className="sort-by">
              <span className="sort-by-title">Sort by:</span>
              <select
                className="sort-select form-control shadow-none "
                value={this.state.sort.sortBy}
                onChange={(ev) => this.onSortChange(ev)}
              >
                <option value="status">Status </option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="direction-box">
              <span className="direction-title">Direction:</span>
              <select
                className=" direction-select form-control shadow-none "
                value={this.state.sort.direction}
                onChange={(ev) => this.onDirectionChange(ev)}
              >
                <option value="DESC">DESC </option>
                <option value="ASC">ASC</option>
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
