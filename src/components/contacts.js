import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

// images
import "../stylesheets/contact.css";
import contactpic from "../images/contactpic.jpg";

class Contacts extends Component {
    render() {
        return (
            <div className='Contact-pic jumbotron'>
                <br/>
                <h1>Contact Details</h1>


                <div>
                    <br />
                    <br />
                    <br />
                    <Container>

                        <Row>
                            <Col><h4>Call Us Now</h4></Col>
                            <Col><h4>Our Head Office</h4></Col>
                            <Col><h4>E-Mail</h4></Col>
                        </Row>
                        <br />

                        <Row>
                            <Col><h6>011-09909900</h6></Col>
                            <Col><h6>No-125,Barns Place,Colombo</h6></Col>
                            <Col><h6>www.onlinebookapp@gmail.com</h6></Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <br />
                        
                            <Row>
                                <a className='nav-link' href='https://www.facebook.com/prasansanajaya' target='_blank'><Col className='caption-col'>Facebook</Col></a>
                                <a className='nav-link' href='https://www.instagram.com/' target='_blank'><Col className='caption-col'>Instagram</Col></a>
                                <a className='nav-link' href='https://twitter.com/home?lang=en' target='_blank'><Col className='caption-col'>Twitter</Col></a>
                                <a className='nav-link' href='' target='_blank'><Col className='caption-col'>Send Mail</Col></a>
                                <a className='nav-link' href='' target='_blank'><Col className='caption-col'>Call Us</Col></a>
                            </Row>

                        
                    </Container>

                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>
        )
    }
}

export default Contacts
