import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavBar';

class JournalEntryEdit extends Component {



  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const group = await (await fetch(`/journal-app/v1/journal-entries${this.props.match.params.id}`)).json();
      this.setState({item: group});
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

  async handleSubmit(event, id) {
    event.preventDefault();
    const {item} = this.state;
    console.log("aaaa", window.location.href);
    if(`${window.location.href}` === `http://localhost:3000/journal-entries/new`){
      await fetch(`/journal-app/v1/journal-entries`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
      });
      console.log("for", this.props.history.push);
      this.props.history.push('/journal-entries');
      console.log(JSON.stringify(item));
    } else{
      await fetch(`/journal-app/v1/journal-entries/${this.props.match.params.id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
      });
      this.props.history.push(`/journal-entries`);
    }
  }


  render() {
    const {item} = this.state;
    const title = <h2>{this.props.match.params.id ? 'Edit Journal' : 'Add Journal'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            
            <textarea type="text" name="journalEntryText" value={item.journalEntryText || ''}
                   onChange={this.handleChange} autoComplete="journalEntryText"/>
          </FormGroup>
          
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/journal-entries">Cancel</Button>
          </FormGroup>
         
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(JournalEntryEdit);