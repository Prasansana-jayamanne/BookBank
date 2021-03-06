import React, { Component } from 'react';
import firebase from '../configurations/fbaseconfig';
import { Container, Col, Card, Row, Button, Spinner } from 'react-bootstrap';

import stylesheets from '../stylesheets/books.css'
import available from '../images/available.jpg'

const db = firebase.firestore();
class Books extends Component {

    state = {
        books: [],
        
    }



    componentDidMount() {
        db.collection('Books-Available').get().then(data => {
            data.docs.forEach(doc => {
                this.setState({
                    books: [...this.state.books, doc.data()]
                });
                // console.log(doc.data());

            })
        })
    }

    render() {
        return (
            <div className='Books-Available jumbotron-fluid'>
                <br /><br /><br /><br />
                <h1 className='Bookcolor'>Books Available</h1>
                <br />
                <Row>
                    {this.state.books.length ? (
                        this.state.books.map(item => {
                            return (
                                <Col lg={3} md={6} xs={12} style={{ marginBottom: "30px" }} key={item}>
                                    <Card>
                                        <Card.Header className='text-capitalize'><b>{item.Bookname}</b></Card.Header>
                                        <Card.Body className='text-capitalize'>
                                            <p>{item.Author}</p>
                                            <p>{item.Price}</p>
                                            <p>{item.ISBN}</p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                // <div className='book-each'>
                                //      <p>{item.Bookname}</p>
                                //      <p>{item.Author}</p>
                                //      <p>{item.Price}</p>
                                //      <p>{item.ISBN }</p>
                                //      <hr/>
                                //  </div>


                            )
                        })
                    ) : (
                            <div className='mx-auto'>
                                <Button variant="primary" disabled>
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                           Loading...
                                               </Button>
                            </div>
                        )}
                </Row>


            </div>
        )
    }
}

export default Books;