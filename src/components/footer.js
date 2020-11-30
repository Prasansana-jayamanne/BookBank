import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "../stylesheets/footer.css";

class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <br/>
                <Container>
                    <Row className='my-auto'>
                        <Col>Book reading Access&#169; Copyright</Col>
                        <Col>Developed by JAY'S Solutions</Col>
                        <Col>www.jaysolutions@gmail.com</Col>
                        <Col>011-2255896</Col>

                    </Row>
                </Container>
                <br />

            </div>
        )
    }
}

export default Footer
