import React, { Component } from 'react'
import { Button, ButtonGroup, Container, Table, Form, Formgroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import AppNavbar from './AppNavBar';
import axios from 'axios';

export default class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chatComment: '',
            comments: [], 
            isLoading: true,
            item: []
        };
        this.remove = this.remove.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }

    async handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch('https://journal-backend1.herokuapp.com/journal-app/v1/comments', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
        

        console.log("aaaa", window.location.href);
        if(`${window.location.href}` === `https://journal-frontend.herokuapp.com/journal-entries/new` || `https://journal-frontend.herokuapp.com/journal-entries/new`){
          await fetch(`https://journal-backend1.herokuapp.com/journal-app/v1/comments`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.comment),
          });
          
          this.props.history.push('https://journal-backend1.herokuapp.com/comments');
          console.log(JSON.stringify(this.state.comment));
         } 
    //       await fetch(`/journal-app/v1/comments/`, {
    //         method: 'PUT',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(this.state.comment),
    //       });
    //       this.props.history.push(`/comments`);
    //     }
       }

    componentDidMount() {
        
        this.setState({isLoading: true});
    
        fetch('https://journal-backend1.herokuapp.com/journal-app/v1/comments')
          .then(response => response.json())
          .then(data => this.setState({comments: data, isLoading: false}));


          axios.get(`http://localhost:3000/journal-app/v1/comments`)
        .then((response) => {
            console.log(response.data);
            this.setState({
                comments: response.data
            });
            
        }) 
      }
      handleInputChange(event) {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
      }


    
      async remove(id) {
        await fetch(`https://journal-backend1.herokuapp.com/journal-app/v1/comments/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
          let updatedComments = [...this.state.comments].filter(i => i.id !== id);
          this.setState({comments: updatedComments});
        });
      }

      handleChange = (event) => {
            this.setState({
                chatComment: event.target.value
            })
      }

     

    render() {
        let comments = this.state.comments;
        console.log(this.state);
        
        
         const commentList = comments.map(comments  => {
            return <>
            <h1 key={comments.id}></h1>
                <p>{comments.chatComment}</p>
        </>
        });
    
        
    
        return (
          <div>
              <Form onSubmit={this.handleSubmit}>
                  <label>Enter Comment</label>
              <input type="text" name="chatComment" value={this.state.chatComment || ''}
                   onChange={this.handleChange}/>
                   <Button color="secondary" type="submit">Save</Button>
                   </Form>
            <p>{commentList}</p>
          </div>
        );
      }
    }

