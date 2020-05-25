import React, { Component } from 'react'
import Axios from 'axios'
import Image from './Image'

export default class JournalEntry extends Component {
    state = {
            text: this.props
    }

    componentDidMount(){
        // const { id } = this.props.match.params;
        // fetch(`http://localhost:3000/journal-entries/entry/${id}`)

        // fetch(`/journal-app/v1/journal-entries/${id}`)
        // .then(response => response.json())
        // .then(data => this.setState({journals: data, isLoading: false}));
        // console.log(this.state.journals);
        
    }
    

    

    render() {
        return (
            <div>
                <h1>hello</h1>
                
                
            </div>
        )
    }
}

