import React from "react";
import "../styles.css";

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div key={movie?.id} className="movie-card">
      <img src={`images/${movie?.id}.jpg`} alt={`movie-${movie?.id}`} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie?.title}</h3>
        <p className="movie-card-genre">{movie?.genre}</p>
        <p className="movie-card-rating">{movie?.rating}</p>
      </div>
    </div>
  );
};
export default MovieCard;
