import React, { Component } from "react";
import "../CSS/List.css";
import { Container, Row, Col } from "reactstrap";
import InputFrame from "./InputFrame";
class List extends Component {
  // list() {
  //   let i = 0;
  //   if(!this.props.tasks){
  //       return "May chua co task dm luoi"
  //   }
  //   return this.props.tasks.map((task) => {
  //     i++;
  //     return (
  //       <Row className="list">
  //         <Col xs="1" className="borderRadius">
  //           {i}.
  //         </Col>
  //         <Col>{task.content}</Col>
  //         <Col xs="1" >
  //           ticker
  //         </Col>
  //       </Row>
  //     );
  //   });
  // }
  render() {
    // const list = this.list();
    return (
      <div>
        {/* <Container>{list}</Container>
        <div className="right">
            <InputFrame/>
        </div> */}
          <div className="font">
            <div className="row">
            <div className="col-8 boder">
              <Row className="list">
                <Col xs="1" className="STT">
                  1.
                </Col>
                <Col className="text">
                  Eat (No background means priority: medium; No icon means status: pending)
                </Col>
                <Col xs="1" >
                  ticker
                </Col>
              </Row>
              <Row className="list">
                <Col xs="1" className="STT">
                  1.
                </Col>
                <Col className="text">
                  Eat (No background means priority: medium; No icon means status: pending)
                </Col>
                <Col xs="1" >
                  ticker
                </Col>
              </Row>
            </div>
            <div className="col-4">

            </div>
          </div>
          </div>

      </div>
    );
  }
}

export default List;
