import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../redux/actions';
import { ReactComponent as ArrowWhite } from '../../resources/icons/icon-arrow-white.svg';
import { ReactComponent as ArrowGrey } from '../../resources/icons/icon-arrow-grey.svg';
import { ReactComponent as LogoIMDB } from '../../resources/logos/logo-imdb.svg';
import { ReactComponent as LogoRottenTomatoes } from '../../resources/logos/logo-rotten-tomatoes.svg';
import { ReactComponent as HeartGrey } from '../../resources/icons/icon-heart-grey.svg';
import { ReactComponent as HeartWhite } from '../../resources/icons/icon-heart-white.svg';
import { ReactComponent as HeartFull } from '../../resources/icons/icon-heart-full.svg';
import '../styles/MovieDetails.scss';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      isArrowHovered: false,
      isFavoriteHovered: false,
      isFavorite: props.favorites.includes(props.match.params.id),
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://www.omdbapi.com/?i=${encodeURIComponent(id)}&apikey=906ae61f`)
      .then((response) => response.json())
      .then((json) => this.setState({ movie: json }))
      .catch((err) => console.log('Request Failed: ', err));
  }

  updateFavorite = () => {
    const { isFavorite } = this.state;
    const { dispatchAddFavorite, dispatchRemoveFavorite, match } = this.props;
    const { id } = match.params;
    if (isFavorite) dispatchRemoveFavorite(id);
    else dispatchAddFavorite(id);
    this.setState({ isFavorite: !isFavorite });
  };

  render() {
    const {
      isArrowHovered, isFavoriteHovered, movie, isFavorite,
    } = this.state;
    if (movie) return (
      <>
        <div className="arrow-container">
          <Link to="/">
            {isArrowHovered
              ? <ArrowWhite onMouseLeave={() => this.setState({ isArrowHovered: false })} />
              : <ArrowGrey onMouseEnter={() => this.setState({ isArrowHovered: true })} />}
          </Link>
        </div>
        <div className="content-container">
          <div className="info-container">
            <div className="labels-container">
              <span>{movie.Runtime}</span>
              <span className="divider">·</span>
              <span>{movie.Year}</span>
              <span className="divider">·</span>
              <span className="rated">{movie.Rated}</span>
            </div>
            <h1>{movie.Title}</h1>
            <div className="ratings-container">
              <div className="logo-label">
                <div className="imdb logo"><LogoIMDB /></div>
                <div>{movie.Ratings.find((elem) => elem.Source === 'Internet Movie Database').Value}</div>
              </div>
              <div className="logo-label">
                <div className="rotten-tomatoes logo"><LogoRottenTomatoes /></div>
                <div>{movie.Ratings.find((elem) => elem.Source === 'Rotten Tomatoes').Value}</div>
              </div>
              <div
                className={`favorite-button${isFavorite ? ' favorite' : ''}`}
                onClick={this.updateFavorite}
                onMouseEnter={() => this.setState({ isFavoriteHovered: true })}
                onMouseLeave={() => this.setState({ isFavoriteHovered: false })}
              >
                {isFavorite ? <HeartFull /> : (<>{isFavoriteHovered ? <HeartWhite /> : <HeartGrey />}</>)}
                <span>{isFavorite ? 'Added' : 'Add to favorites'}</span>
              </div>
            </div>
            <div className="plot-container">
              <h2>Plot</h2>
              <p className="plot">{movie.Plot}</p>
            </div>
            <div className="extra-info-container">
              <div className="extra-info-subcontainer">
                <h2>Cast</h2>
                {movie.Actors.split(', ').map((e) => (<div className="extra-info-item">{e}</div>))}
              </div>
              <div className="extra-info-subcontainer">
                <h2>Genre</h2>
                {movie.Genre.split(', ').map((e) => (<div className="extra-info-item">{e}</div>))}
              </div>
              <div className="extra-info-subcontainer">
                <h2>Director</h2>
                {movie.Director.split(', ').map((e) => (<div className="extra-info-item">{e}</div>))}
              </div>
            </div>
          </div>
          <div className="poster-container">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </div>
      </>
    );
    return (<div />);
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

const mapDispatchToProps = {
  dispatchAddFavorite: addFavorite,
  dispatchRemoveFavorite: removeFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
