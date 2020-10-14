import React from 'react';
import Searchbar from './Searchbar';
import MovieGrid from './MovieGrid';
import '../styles/App.scss';

function Home() {
  return (
    <>
      <Searchbar />
      <MovieGrid />
    </>
  );
}

export default Home;
