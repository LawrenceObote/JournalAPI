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
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});

    }

    async handleSubmit(event, id){
        event.preventDefault();
        const {item} = this.state;
        if(`${window.location.href}` === `http://localhost:3000/journal-entries/new`){
            await fetch(`/journal-app/v1/journal-entries`,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item),
            });
            this.props.history.push('/journal-entries');
        } else{
            await fetch(`/journal-app/v1/journal-entries${this.props.match.params.id}`, {
                method: 'PUT', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item),
            });
            this.props.history.push('/journal-entries');
        }
    }
    render() {
        const{item} = this.state;
        const title = <h2>{this.props.match.params.id ? 'Edit Employee' : 'Add Employee'}</h2>
        
        return (
            <div>
                <AppNAvBar/>
                <Container
                
            </div>
        )
    }
}
