import React from 'react';
import './App.css';
import { Button } from 'reactstrap';
import JournalEntryEdit from './components/JournalEntryEdit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import EntryList from './components/EntryList';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path='/' exact={true} component={Home}></Route>
            <Route path='/journal-entries' exact={true} component={EntryList}></Route>
            <Route path='/journal-entries/:id' component={JournalEntryEdit}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
