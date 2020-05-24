import React, { Component } from 'react'

export default class JournalEntry extends Component {

    emptyItem = {
        journalEntryText: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        if (this.props.match.params.id !== 'new') {
            const group = await (await fetch `/journal-app/v1/journal_entries${this.props.match.params.id}`)).json();
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
