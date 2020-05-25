import React, { Component } from 'react'

export default class JournalEntry extends Component {
    render() {
        const journalEntryList = journal_entries.map(journal_entries => {
            return <tr key={journal_entries.id}>
              <td style={{whiteSpace: 'nowrap'}}>{journal_entries.journalEntryText}</td>
              <td>{journal_entries.id}</td>
             
              <td>
                <ButtonGroup>
                  <Button size="sm" color="primary" tag={Link} to={"/journal-entries/" + journal_entries.journalEntryId}>Edit</Button>
                  <Button size="sm" color="danger" onClick={() => this.remove(this.props.match.params.id)}>Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
          });
        return (
            <div>
                
            </div>
        )
    }
}
