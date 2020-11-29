// import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, } from 'react-bootstrap';

//components loading
import Home from "./components/home";
import Books from "./components/books";
import Addbooks from "./components/addbooks";
import Contacts from "./components/contacts"
import Footer from "./components/footer"

//images
import logopic from "./images/bookbank.jpg"
import addphoto from './images/addphoto.jpg'
import bookbank from './images/bookbank.jpg'


function App() {
  return (
    // <div className="App">
      <div className="App">
            <div className="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#"><img className='mr-2'
                src={bookbank}
                width='300px'
                height='50px'/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-5 active">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link " href="#books">Books</a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link" href="#addBooks">Add Book</a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link" href="#contacts">Contact</a>
                    </li>
                    </ul>
                </div>
            </nav>
            </div>
      {/* <div>

      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home" className='site-name'>
  <img
        alt=""
        src={logopic}
        width="60"
        height="40"
        className="d-inline-block align-top"
      />{' '}
    Book Bank</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="nav-text">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#books">Books</Nav.Link>
      <Nav.Link href="#addbooks">Add Books</Nav.Link>
      <Nav.Link href="#contacts">Contacts</Nav.Link>
      
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
      </div> */}
      <section id={'home'} >    <Home/>       </section>

        
      <section id={'books'} > <Books/> </section>
      
      
      
      <section id={'addBooks'} ><Addbooks/> </section>
      
      <section id={'contacts'}><Contacts/></section>
      
      <section id={'footer'}><Footer/></section>

    </div>
  );
}

export default App;
