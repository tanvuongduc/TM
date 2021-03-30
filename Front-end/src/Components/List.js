import React, { Component } from "react";
import "../CSS/taskManager.css";
import { Container, Row, Col } from "reactstrap";
import InputFrame from "./InputFrame";
class List extends Component {
  list(){
      let i =0
    return this.props.tasks.map(task=>{
        i++
          return(
            <Row className="list">
            <Col xs="1" className="borderRadius">
              {i}.
            </Col>
            <Col>
              {task.content}
            </Col>
            <Col xs="1" img={link+task.status}>ticker</Col>
          </Row>
          )
    })
  }
  render() {
      const list = this.list()
    return (
      <div>
        <Container>
        
          <Row className="list">
            <Col xs="1" className="borderRadius">
              1.
            </Col>
            <Col>
              Eat (No background means priority medium, No icon means status
              pending)
            </Col>
            <Col xs="1">ticker</Col>
          </Row>
        </Container>
        <InputFrame />
      </div>
    );
  }
}

export default List;
