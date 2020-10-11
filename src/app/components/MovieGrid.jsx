import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmptyStateIllustration from '../../resources/illustrations/illustration-empty-state.png';
import '../styles/App.scss';
import MovieCard from './MovieCard';

class MovieGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: null,
    };
  }

  componentDidUpdate(prevProps) {
    const { searchTerm } = this.props;
    if (prevProps.searchTerm !== searchTerm) {
      fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=906ae61f`)
        .then((response) => response.json())
        .then((json) => this.setState({ movieList: json.Response === 'True' ? json.Search : null }))
        .catch((err) => console.log('Request Failed: ', err));
    }
  }

  render() {
    const { movieList } = this.state;

    if (!movieList) {
      return (
        <div className="empty-state">
          <img src={EmptyStateIllustration} alt="Logo" />
          <div className="empty-state-text">Don't know what to search?</div>
          <div className="empty-state-subtext">Here's an offer you can't refuse</div>
        </div>
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
