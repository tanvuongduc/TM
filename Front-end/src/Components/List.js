import React, { Component } from "react";
import "../CSS/List.css";
import { Row, Col } from "reactstrap";
import InputFrame from "./InputFrame";

class List extends Component {
  constructor(props){
    super(props)
    this.state={
      task:{}
    }
  }

  updateInputFrame(task){
    this.setState({
      task:task
    })
  }
  list() {
    let i = 0;
    let status = ['Pendding', 'Progress', 'Done']
    if (!this.props.tasks) {
      return "..."
    }
    return this.props.tasks.map((task) => {
      i++;
      return (
        <Row className="list" key={i} onClick={()=>this.updateInputFrame(task)}>
          <Col xs="1" className="STT">
            {i}.
                </Col>
          <Col className="text">
            {task.content}
          </Col>
          <Col xs="1" >
            {status[task.status]}
          </Col>
        </Row>
      );
    });
  }
  render() {
    const list = this.list();
    return (
      <div>
        <div className="font">
          <div className="row">
            <div className="col-8">
              {list}
            </div>
            <div className="col-4">
              <InputFrame task={this.state.task} update={(task)=>this.updateInputFrame(task)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
