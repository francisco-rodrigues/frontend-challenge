import React from 'react';

function MovieCard(props) {
  return (
    <div className="movie-card-wrapper">
      <img src={props.poster} alt={props.title} />
    </div>
  );
}

export default MovieCard;
