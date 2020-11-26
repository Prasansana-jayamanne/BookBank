import React, { Component } from 'react';
import { Container, Col, Row, Carousel } from 'react-bootstrap';

import "../stylesheets/home.css";

import cover01 from '../images/cover01.jpg'
import cover02 from '../images/cover02.jpg'
import cover03 from '../images/cover03.jpg'



class Home extends Component {
    render() {
        return (
            <div className='jumbotron'>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            src={cover01}
                            alt="First slide"
                            className="coverImage"
                        />
                        <Carousel.Caption className='carousel-caption'>
                            <h3 className='caption-text'>Read More <br />Live More</h3>
                            <Container>

                                <Row className='caption-row'>
                                    <Col>Facebook</Col>
                                    <Col>Instagram</Col>
                                    <Col>Twitter</Col>
                                    <Col>Send Mail</Col>
                                    <Col>Call Us</Col>
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
                            src={cover02}
                            alt="Second slide"
                            className='coverImage'
                        />
                        <Carousel.Caption className='carousel-caption'>
                            <h3 className='caption-text'>Read More <br />Live More</h3>
                            <Container>

                                <Row className='caption-row'>
                                    <Col>Facebook</Col>
                                    <Col>Instagram</Col>
                                    <Col>Twitter</Col>
                                    <Col>Send Mail</Col>
                                    <Col>Call Us</Col>
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
                            src={cover03}
                            alt="Third slide"
                        />
                        <Carousel.Caption className='carousel-caption'>
                            <h3 className='caption-text'>Read More <br />Live More</h3>
                            <Container>

                                <Row className='caption-row'>
                                    <Col>Facebook</Col>
                                    <Col>Instagram</Col>
                                    <Col>Twitter</Col>
                                    <Col>Send Mail</Col>
                                    <Col>Call Us</Col>
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