import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavBar';
import { Link } from 'react-router-dom';
import Image from './Image'

class EntryList extends Component {

  constructor(props) {
    super(props);
    this.state = {journals: [], isLoading: true};
    this.remove = this.remove.bind(this);
    
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/journal-app/v1/journal-entries')
      .then(response => response.json())
      .then(data => this.setState({journals: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/journal-app/v1/journal-entries/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedJournals = [...this.state.journals].filter(i => i.id !== id);
      this.setState({journals: updatedJournals});
    });
  }

  render() {
    const {journals, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const journalList = journals.map(journal_entries => {
      console.log('aaa', journal_entries);
      return <tr key={journal_entries.id}>
        <Link to={{
            pathname: `journal-entry/${journal_entries.journalEntryId}`,
            state:{
                text: journal_entries.journalEntryText
            }
        }}>
        <td style={{whiteSpace: 'nowrap'}} tag={Link} to={"/journal-entries/entry/" + journal_entries.journalEntryId}>{journal_entries.journalEntryText}</td>
        </Link>
        <td>{journal_entries.journalEntryId}</td>
        
        
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={`/journal-entries/entry/${journal_entries.journalEntryId}` + journal_entries.journalEntryId}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(journal_entries.journalEntryId)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/journal-entries/new">Add Group</Button>
          </div>
          <h3>Journals List</h3>
          <Table className="mt-4">
            <thead>
            <tr>
              <th width="20%">Journal Text</th>
              <th width="20%">Entry Id</th>
              <th width="10%">Actions</th>
              <th width="10%">Open</th>
            </tr>
            </thead>
            <tbody>
            {journalList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default EntryList;