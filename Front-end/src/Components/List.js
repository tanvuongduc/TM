import React, { Component } from "react";
import "../CSS/List.css";
import { Row, Col } from "reactstrap";
import InputFrame from "./InputFrame";

class List extends Component {
  constructor(props){
    super(props)
    this.state={
      dataInputFrame:{},
      selectedIndex: -1,
    }
  }
  postToInputFrame(task, i){
    console.log(task)
    this.setState({
      dataInputFrame:task,
      selectedIndex:i,
    })
  }

  //
  
  //
  list() {
    let i = 0;
    let status = ['Pendding', 'Progress', 'Done']
    let priority = ['Medium', 'Low', 'High']
    //

    //
    if (!this.props.tasks) {
      return "..."
    }
    return this.props.tasks.map((task, i) => {
      i++;
      return (
        <Row className={(i!=this.state.selectedIndex)?priority[task.priority]:'list select'} key={i} onClick={()=>this.postToInputFrame(task, i)}>
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
              <InputFrame task={this.state.dataInputFrame}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
