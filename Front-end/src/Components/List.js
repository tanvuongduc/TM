import React, { Component } from "react";
import "../CSS/taskManager.css";
import { Container, Row, Col } from "reactstrap";
import InputFrame from "./InputFrame";
class List extends Component {
  list() {
    let i = 0;
    if(!this.props.tasks){
        return "May chua co task dm luoi"
    }
    return this.props.tasks.map((task) => {
      i++;
      return (
        <Row className="list" key={i}>
          <Col xs="1" className="borderRadius">
            {i}.
          </Col>
          <Col>{task.content}</Col>
          <Col xs="1" >
            ticker
          </Col>
        </Row>
      );
    });
  }
  render() {
    const list = this.list();
    return (
      <div>
        <Container>
        <InputFrame/>
        
        </Container>
        
      </div>
    );
  }
}

export default List;
