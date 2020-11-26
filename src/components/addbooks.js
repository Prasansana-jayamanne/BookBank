import React, { Component } from 'react';
import { Form, Button, Col, InputGroup } from 'react-bootstrap';
import firebase from '../configurations/fbaseconfig';

const db = firebase.firestore();


class Addbooks extends Component {

    state= {
       Bookname :'',
       Author : '',
       Price : '',
       ISBN : '',
       Username :'',
       Password : "", 
    }

    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })

    }
    submitdata = (e) =>{
        e.preventDefault();

        // console.log(
            // this.state.Firstname,
            // this.state.Lastname,
            // this.state.Telephone

        // )
        db.collection('Books-Available').add({
            Bookname : this.state.Bookname, 
            Author : this.state.Author,
            Price : this.state.Price,
            ISBN : this.state.ISBN,
           
        })
    }

    render() {
        return (
            <div className='jumbotron'>
                <h1>Add Your Book Here</h1>
                <br />


                <div>
                {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}

                    <Form  onSubmit={this.submitdata}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="Bookname"
                                    placeholder="Book name"
                                    onChange={this.handlechange} 
                                    
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Author</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="Author"
                                    placeholder="Author"
                                    onChange={this.handlechange} 
                                    
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Price</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">USD</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        name="Price"
                                        placeholder="Price"
                                        // aria-describedby="inputGroupPrepend"
                                        required
                                        onChange={this.handlechange} 
                                        
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
            </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>ISBN</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="ISBN"
                                placeholder="ISBN" 
                                required
                                onChange={this.handlechange}  />
                                <Form.Control.Feedback type="invalid">
                                    Please provide valid ISBN
          </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                type="text" 
                                name="Username"
                                placeholder="Username" 
                                required 
                                onChange={this.handlechange} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Username.
          </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                type="password"
                                name="Password" 
                                placeholder="Password" 
                                required
                                onChange={this.handlechange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
          </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        
                        <Button type="submit">Submit form</Button>
                    </Form>
                </div>
                {/* ) */}
            </div>
        )
    }
}

export default Addbooks;
