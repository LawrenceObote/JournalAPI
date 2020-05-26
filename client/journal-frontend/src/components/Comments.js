import React, { Component } from 'react'
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import AppNavbar from './AppNavBar';
import axios from 'axios';

export default class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {comments: [], isLoading: true};
        this.remove = this.remove.bind(this);
        
      }

    async handleSubmit(event, id) {
        event.preventDefault();
        const {item} = this.state;
        console.log("aaaa", window.location.href);
        if(`${window.location.href}` === `http://localhost:3000/comments/new`){
          await fetch(`/journal-app/v1/comments`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
          });
          
          this.props.history.push('/comments');
          console.log(JSON.stringify(item));
        } else{
          await fetch(`/journal-app/v1/comments/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
          });
          this.props.history.push(`/comments`);
        }
      }

    componentDidMount() {
        this.setState({isLoading: true});
    
        fetch('/journal-app/v1/comments')
          .then(response => response.json())
          .then(data => this.setState({comments: data, isLoading: false}));


          axios.get(`http://localhost:3000/journal-app/v1/comments`)
        .then((response) => {
            console.log(response.data);
            this.setState({
                comments: response.data
            });
            
        })


        console.log(this.state.comments);
      }
    
      async remove(id) {
        await fetch(`/journal-app/v1/comments/${id}`, {
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

    render() {
        const comments = this.state.comments;
        console.log(this.state);
        
        
         const commentList = comments.map(comments  => {
            return <>
            <h1 key={comments.id}></h1>
                <p>{comments.chatComment}</p>
        </>
        });
    
        
    
    
        return (
          <div>
            <p>{commentList}</p>
          </div>
        );
      }
    }

