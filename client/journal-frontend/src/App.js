import React from 'react';
import './App.css';
import { Button } from 'reactstrap';
import JournalEntryEdit from './components/JournalEntryEdit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path='/' exact={true}></Route>
            <Route path='/journal-entries' exact={true}></Route>
            <Route path='/journal-entries/:id' component={JournalEntryEdit}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
