import React, { Component } from 'react';
import { Form, Button, Col, InputGroup, cards } from 'react-bootstrap';
import firebase from '../configurations/fbaseconfig';
import swal  from 'sweetalert';

// images
import "../stylesheets/addbooks.css";
import addphoto from "../images/addphoto.jpg";


const db = firebase.firestore();


class Addbooks extends Component {

    constructor(props) {
        super(props);


        this.state = {
            Bookname: '',
            Author: '',
            Price: '',
            ISBN: '',
            Username: '',
            Password: "",
            BooknameError: '',
            AuthorError: '',
            PriceError: '',
            ISBNError: '',
            UsernameError: '',
            PasswordError: ''
        };
        this.handlechange = this.handlechange.bind(this);
        this.submitdata = this.submitdata.bind(this);
        this.validatefield = this.validatefield.bind(this);
    }


    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        }, () => {
            this.validatefield();

        })

    }

    validatefield =() => {
        this.setState({BooknameError: this.state.Bookname.length> 0 ? null : 'Bookname is required!'});
        this.setState({AuthorError: this.state.Author.length> 0 ? null : 'Author is required!'});
        this.setState({PriceError: this.state.Price.length> 0 ? null : 'Price is required!'});
        this.setState({ISBNError: this.state.ISBN.length> 0 ? null : 'ISBN is required!'});
        this.setState({UsernameError: this.state.Username.length> 0 ? null : 'Username is required!'});
        this.setState({PasswordError: this.state.Password.length> 0 ? null : 'Password is required!'})
    }
    submitdata = (e) => {
        e.preventDefault();
        if (this.state.Bookname === '' || this.state.Author === '' || this.state.Price === '' || 
        this.state.ISBN === '' || this.state.Username === '' || this.state.Password === '') {
            swal({
                title: "Error",
                text: "All fields Are Required",
                icon: "error",
                timer: 4000,
                button:false
            });
        }

        
        else if ( (this.state.Username === 'Bookadmin' || this.state.Username === 'bookadmin')  && this.state.Password==='pwdadmin'){
            db.collection('Books-Available').add({
                Bookname: this.state.Bookname,
                Author: this.state.Author,
                Price: this.state.Price,
                ISBN: this.state.ISBN,
    
            });
            this.setState({
                Bookname:'',
                Author: '',
                Price: '',
                ISBN : '',
                Username: '',
                Password: '',

            });
                

          
            e.target.reset();
            swal({
                title: "Good Work",
                text: "Book is Added to Database",
                icon: "success",
                timer: 3000,
                button:false
            });

        }else{
            swal({
                title: "Error",
                text: "Password and Username MisMatch",
                icon: "error",
                timer: 4000,
                button:false

            })
        } 
    }

    render() {
        return (
            <div className='Add-books jumbotron'>
                <br />


                <h1>Add Your Book Here</h1>
                <br />
                <br /> <br /> <br />


                <div>
                   

                    <Form noValidate onSubmit={this.submitdata}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label><h3>Book Name</h3></Form.Label>
                                <Form.Control
                                    className={`text-capitalize form-control ${this.state.BooknameError ? 'is-inavlid' : ''}`}
                                    required
                                    type="text"
                                    name="Bookname"
                                    placeholder="Book name"
                                    onChange={this.handlechange}
                                    onBlur={this.validatefield}

                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label><h3>Author</h3></Form.Label>
                                <Form.Control
                                    className={`text-capitalize  form-control ${this.state.AuthorError ? 'is-invalid' : ''}`}
                                    required
                                    type="text"
                                    name="Author"
                                    placeholder="Author"
                                    onChange={this.handlechange}
                                    onBlur={this.validatefield}


                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label><h3>Price</h3></Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">USD</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control 
                                    className={`  form-control ${this.state.PriceError ? 'is-invalid' : ''}`}

                                        type="text"
                                        name="Price"
                                        placeholder="Price"
                                        // aria-describedby="inputGroupPrepend"
                                        required
                                        onChange={this.handlechange}
                                        onBlur={this.validatefield}


                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
            </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <br />
                        <br />
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <Form.Label><h3>ISBN</h3></Form.Label>
                                <Form.Control 
                                className={`  form-control ${this.state.ISBNError ? 'is-invalid' : ''}`}
                                    type="text"
                                    name="ISBN"
                                    placeholder="ISBN"
                                    required
                                    onChange={this.handlechange}
                                    onBlur={this.validatefield}
/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide valid ISBN
          </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <Form.Label><h3>Username</h3></Form.Label>
                                <Form.Control
                                className={` form-control ${this.state.UsernameError ? 'is-invalid' : ''}`}
                                    type="text"
                                    name="Username"
                                    placeholder="Username"
                                    required
                                    onChange={this.handlechange}
                                    onBlur={this.validatefield}
 />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Username.
          </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <Form.Label><h3>Password</h3></Form.Label>
                                <Form.Control
                                className={` form-control ${this.state.PasswordError ? 'is-invalid' : ''}`}
                                    type="password"
                                    name="Password"
                                    placeholder="Password"
                                    required
                                    onChange={this.handlechange}
                                    onBlur={this.validatefield}

                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
          </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <Button type="submit">Submit Your Book</Button>
                    </Form>
                    <br />
                    <br />
                </div>

                {/* ) */}
            </div>
        )
    }
}

export default Addbooks;
