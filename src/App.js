import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Career from './components/Career';
import Fashion from './components/Fashion';
import Movie from './components/Movie';

function App() {


  return (
    <Router>
    <div className="App">
      
      
      <Switch>
        <Route path="/" exact component={Nav} />
        <Route path="/career" component={Career} />
        <Route path="/fashion" component={Fashion} />
        <Route path="/movie" component={Movie} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
