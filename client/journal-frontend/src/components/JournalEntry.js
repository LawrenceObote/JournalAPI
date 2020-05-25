import React, { Component } from 'react'
import axios from 'axios'
import Comments from './Comments'

export default class JournalEntry extends Component {
    
state = {
    text: this.props.location.state
}
    componentDidMount(){
        
        axios.get(`https://api.unsplash.com/photos/random/?client_id=uhvBFtW47CHc5C94qmgVFRbRhXLRsFSsBoJd8zkOlCY`)
        .then((response) => {
            console.log(response);
            this.setState({
                picture: response.data.urls.small
            });
            
        })

        axios.get(`http://localhost:3000/journal-app/v1/comments`)
        .then((resp) => {
            console.log(resp);
            this.setState({
                comment: resp.data.chatComment
            })

        })
        
    }
    

    

    render() {
        console.log(this.state.comment);
        const {journalText} = this.props.location.state;
        return (
            <div>
                <img src={`${this.state.picture}`} alt="Random"></img>
                <h1>{this.props.location.state.text}</h1>
                <p>{this.state.comment}</p>
                
                
                
            </div>
        )
    }
}

