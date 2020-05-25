import React, { Component } from 'react'
import Axios from 'axios'

export default class JournalEntry extends Component {
    
state = {
    text: this.props.location.state
}
    componentDidMount(){
        
        Axios.get(`https://api.unsplash.com/photos/random/?client_id=uhvBFtW47CHc5C94qmgVFRbRhXLRsFSsBoJd8zkOlCY`)
        .then((response) => {
            console.log(response.data.urls.small);
            this.setState({
                picture: response.data.urls.small
            });
            
        })
        
    }
    

    

    render() {
        let {text} = this.props.location.state;
        return (
            <div>
                <img src={`${this.state.picture}`} alt="Random"></img>
                <h1>{text}</h1>
                
                
            </div>
        )
    }
}

