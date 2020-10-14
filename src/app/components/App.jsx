import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';
import { ReactComponent as Logo } from '../../resources/logos/logo.svg';
import '../styles/App.scss';

function App() {
  return (
    <div className="app">
      <Logo className="page-logo" />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={MovieDetails} />
      </Router>
    </div>
  );
}

export default App;
