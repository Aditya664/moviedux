import React, { useState, useEffect, useMemo } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [movies, query]);

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
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Search for a movie..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
export default MoviesGrid;
