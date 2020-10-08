import React, { Component } from 'react';
import Searchbar from './Searchbar';
import { ReactComponent as Logo } from '../../resources/logos/logo.svg';
import '../styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <div className="app">
        <Logo className="logo" />
        <Searchbar />
      </div>
    );
  }
}

export default App;
