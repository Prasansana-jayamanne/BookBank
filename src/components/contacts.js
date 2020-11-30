import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

// images
import "../stylesheets/contact.css";
import contactpic from "../images/contactpic.jpg";

class Contacts extends Component {
    render() {
        return (
            
            
            <div className='Contact-pic jumbotron-fluid'>
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
                                <a className='nav-link' href='https://www.facebook.com/Book-Bank-103204604977295' target='_blank'><Col className='caption-col'>Facebook</Col></a>
                                <a className='nav-link' href='https://www.youtube.com/user/GreatestAudioBooks' target='_blank'><Col className='caption-col'>Audio Books</Col></a>
                                <a className='nav-link' href='https://www.instagram.com/_bookbank/' target='_blank'><Col className='caption-col'>Instagram</Col></a>
                                <a className='nav-link' href='https://twitter.com/BookBankAfrica' target='_blank'><Col className='caption-col'>Twitter</Col></a>
                                <a className='nav-link' href='https://www.google.lk/maps/place/Barnes+Pl,+Colombo+00700/@6.9129727,79.8681518,17z/data=!3m1!4b1!4m5!3m4!1s0x3ae25976c1a3b561:0x6681f6e044a37b3f!8m2!3d6.9129727!4d79.8703405' target='_blank'><Col className='caption-col'>Location</Col></a>
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
