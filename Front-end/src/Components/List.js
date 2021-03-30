import React, { Component } from 'react';
import "../CSS/taskManager.css";
import { Container, Row, Col } from 'reactstrap';
class List extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="list">
                        <Col  xs="1" className="borderRadius">1.</Col>
                        <Col>Eat (No background means priority medium, No icon means status pending)</Col>
                        <Col xs="1">ticker</Col>
                    </Row>
                    <Row className="list">
                        <Col  xs="1" className="borderRadius">1.</Col>
                        <Col>Eat (No background means priority medium, No icon means status pending)</Col>
                        <Col xs="1">ticker</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default List;