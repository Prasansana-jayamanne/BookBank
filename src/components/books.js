import React, { Component } from 'react';
import firebase from '../configurations/fbaseconfig';

const db = firebase.firestore();
class Books extends Component {
    state ={
        books : [],
        BookName:'',
        Author:'',
        Price:'',
        ISBN:'',
        Username:'',
        Password:'',
    }



    componentDidMount(){
        db.collection('Books-Available').get().then(data =>{
            data.docs.forEach(doc => {
                this.setState({books : [...this.state.books, doc.data()]
                });
                // console.log(doc.data());
                
            })
        })
    
    }
    
    render() {
        return (
            <div className='jumbotron'>
                <h1>Books Available</h1>
                <br/>
                {this.state.books.length?( 
                    this.state.books.map(item =>{
                        return(
                            <div>
                                <p>{item.Bookname}</p>
                                <p>{item.Author}</p>
                                <p>{item.Price}</p>
                                <p>{item.ISBN}</p>
                                <hr/>
                            </div>


                        )
                    })
                ) :(
                    <p>loading.........</p>
                )}

                
            </div>
        )
    }
}

export default Books;