import React, { useState, useEffect } from "react";
import "../styles.css";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      await fetch("movies.json")
        .then((res) => res.json())
        .then((movies) => {
          setMovies(movies);
        });
    };
    fetchMovies();
    return () => {};
  }, []);
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={`images/${movie.id}.jpg`} alt={`movie-${movie.id}`} />
          <div className="movie-card-info">
            <h3 className="movie-card-title">{movie.title}</h3>
            <p className="movie-card-genre">{movie.genre}</p>
            <p className="movie-card-rating">{movie.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MoviesGrid;
