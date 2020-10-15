import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/MovieCard.scss';
import { addFavorite, removeFavorite } from '../redux/actions';
import { ReactComponent as HeartWhite } from '../../resources/icons/icon-heart-white.svg';
import { ReactComponent as HeartFull } from '../../resources/icons/icon-heart-full-border.svg';

function MovieCard(props) {
  const {
    poster, title, year, id, favorites,
    dispatchAddFavorite, dispatchRemoveFavorite,
  } = props;

  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorites.includes(id));

  const updateFavorite = () => {
    if (isFavorite) dispatchRemoveFavorite(id);
    else dispatchAddFavorite(id);
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className="movie-card-wrapper"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <img src={poster} alt={title} />
      {isFavorite && (<HeartFull className="heart" onClick={() => updateFavorite(id)} />)}
      {isCardHovered && (
        <>
          {!isFavorite && (<HeartWhite className="heart" onClick={() => updateFavorite(id)} />)}
          <Link to={`/${id}`} className="movie-card-overlay">
            <div className="movie-title">{title}</div>
            <div className="movie-year">{year}</div>
          </Link>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

const mapDispatchToProps = {
  dispatchAddFavorite: addFavorite,
  dispatchRemoveFavorite: removeFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
