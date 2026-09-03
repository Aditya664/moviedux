import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

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
      {movies.length > 0
        ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        : null}
    </div>
  );
};
export default MoviesGrid;
