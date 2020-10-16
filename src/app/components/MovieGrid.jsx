import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import '../styles/MovieGrid.scss';
import MovieCard from './MovieCard';
import InvalidState from './InvalidState';

class MovieGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: null,
      isLoading: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { searchTerm } = this.props;
    if (prevProps.searchTerm !== searchTerm) {
      this.setState({ isLoading: true });
      fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=906ae61f`)
        .then((response) => response.json())
        .then((json) => this.setState({ isLoading: false, movieList: json.Response === 'True' ? json.Search : null }))
        .catch(() => this.setState({ isLoading: false, movieList: null }));
    }
  }

  render() {
    const { movieList, isLoading } = this.state;
    const { searchTerm } = this.props;

    /* Renders a spinner when waiting for the request response */
    if (isLoading) {
      return (
        <Loader
          type="TailSpin"
          color="#FF9F1C"
          className="loader"
          height={100}
          width={100}
        />
      );
    }

    /* When there is not a valid list of movies, an empty state is renderd if the user
      didn't type anything, or a not found state if the request didn't return a list */
    if (!movieList) {
      let text = 'Don\'t know what to search?';
      let subtext = 'Here\'s an offer you can\'t refuse';
      if (searchTerm) {
        text = `Sorry, no content matching "${searchTerm}" was found`;
        subtext = 'Please try with another search term';
      }

      return (
        <InvalidState text={text} subtext={subtext} />
      );
    }

    const content = movieList.map((movie) => (
      <MovieCard
        poster={movie.Poster}
        title={movie.Title}
        year={movie.Year}
        id={movie.imdbID}
        key={movie.imdbID}
      />
    ));

    return (
      <div className="movie-list">
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
});

export default connect(mapStateToProps)(MovieGrid);
