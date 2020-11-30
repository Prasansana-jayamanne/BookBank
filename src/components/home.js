import React, { Component, } from 'react';
import { Carousel, Container, Col, Row } from 'react-bootstrap';


import "../stylesheets/home.css";

import covernew1 from '../images/covernew1.jpg'
import covernew2 from '../images/covernew2.jpg'
import covernew3 from '../images/covernew3.jpg'



class Home extends Component {
    render() {
        return (
            <div className='jumbotron-fluid'>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            src={covernew1}
                            alt="First slide"
                            className="coverImage"
                        />
                       
                        <Carousel.Caption className='carousel-caption'>
                            <h3 className='caption-text'>Read More <br />Live More</h3>
                            
                            
                            <Container>

                                <Row >
                                    
                                    <a className='nav-link' href='https://www.facebook.com/Book-Bank-103204604977295' target='_blank'><Col className='caption-col'>Facebook</Col></a>
                                    <a className='nav-link' href='https://www.youtube.com/user/GreatestAudioBooks' target='_blank'><Col className='caption-col'>Audio Books</Col></a>
                                    <a className='nav-link' href='https://www.instagram.com/_bookbank/' target='_blank'><Col className='caption-col'>Instagram</Col></a>
                                    <a className='nav-link' href='https://twitter.com/BookBankAfrica' target='_blank'><Col className='caption-col'>Twitter</Col></a>
                                    
                                </Row>
                            </Container>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption >
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            src={covernew2}
                            alt="Second slide"
                            className='coverImage'
                        />
                        <Carousel.Caption className='carousel-caption'>
                            <h3 className='caption-text'>Read More <br />Live More</h3>
                            <Container>

                                <Row>
                                    <a className='nav-link' href='https://www.facebook.com/Book-Bank-103204604977295' target='_blank'><Col className='caption-col'>Facebook</Col></a>
                                    <a className='nav-link' href='https://www.youtube.com/user/GreatestAudioBooks' target='_blank'><Col className='caption-col'>Audio Books</Col></a>
                                    <a className='nav-link' href='https://www.instagram.com/_bookbank/' target='_blank'><Col className='caption-col'>Instagram</Col></a>
                                    <a className='nav-link' href='https://twitter.com/BookBankAfrica' target='_blank'><Col className='caption-col'>Twitter</Col></a>
                                    
                                </Row>
                            </Container>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="coverImage"
                            src={covernew3}
                            alt="Third slide"
                        />
                        <Carousel.Caption className='carousel-caption'>
                            <h3 className='caption-text'>Read More <br />Live More</h3>
                            <Container>

                                <Row>
                                    <a className='nav-link' href='https://www.facebook.com/Book-Bank-103204604977295' target='_blank'><Col className='caption-col'>Facebook</Col></a>
                                    <a className='nav-link' href='https://www.youtube.com/user/GreatestAudioBooks' target='_blank'><Col className='caption-col'>Audio Books</Col></a>
                                    <a className='nav-link' href='https://www.instagram.com/_bookbank/' target='_blank'><Col className='caption-col'>Instagram</Col></a>
                                    <a className='nav-link' href='https://twitter.com/BookBankAfrica' target='_blank'><Col className='caption-col'>Twitter</Col></a>
                                    
                                </Row>
                            </Container>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>Read More</h1>
                <br />
                <br />
                <h1>Live More</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                

                <Container>
                    
                    <Row>
                        <Col>Facebook</Col>
                        <Col>Instagram</Col>
                        <Col>Twitter</Col>
                        <Col>Send Mail</Col>
                        <Col>Call Us</Col>
                    </Row>
                </Container> */}
                {/* <br/>
                <br/> */}




            </div>




        )
    }
}

export default Home;