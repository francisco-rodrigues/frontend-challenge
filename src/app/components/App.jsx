import React from 'react';
import Searchbar from './Searchbar';
import MovieGrid from './MovieGrid';
import { ReactComponent as Logo } from '../../resources/logos/logo.svg';
import '../styles/App.scss';

function App() {
  return (
    <div className="app">
      <Logo className="logo" />
      <Searchbar />
      <MovieGrid />
    </div>
  );
}

export default App;
