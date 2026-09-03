import { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase()),
  );

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
