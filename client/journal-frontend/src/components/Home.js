import React, { Component } from 'react';
import '../App.css'
import AppNavbar from './AppNavBar'
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Button outline color="secondary"><Link to="/journal-entries" id="Journal-entries">Journal Entries</Link></Button>
        </Container>
      </div>
    );
  }
}

export default Home;