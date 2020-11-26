import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

class Contacts extends Component {
    render() {
        return (
            <div className='jumbotron'>
                <h1>Contact Details</h1>


                <div>
                    <br />
                    <Container>
                        
                        <Row>
                            <Col>Call Us Now</Col>
                            <Col>Our Head Office</Col>
                            <Col>E-Mail</Col>
                        </Row>
                        <Row>
                            <Col>011-09909900</Col>
                            <Col>No-125,Barns Place,Colombo</Col>
                            <Col>www.onlinebookapp@gmail.com</Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>FaceBook</Col>
                            <Col>Twitter</Col>
                            <Col>Instagram</Col>
                            
                            
                            <Col>Linkdin</Col>
                            <Col>WhatsApp</Col>
                            <Col>Viber</Col>
                        
                        </Row>
                    </Container>

                </div>
                <br />
            </div>
        )
    }
}

export default Contacts
