import { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

const MoviesGrid = (props) => {
  const { movies } = props;
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All Ratings");

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre?.toLowerCase() === genre?.toLowerCase()
    );
  };

  const matchesSearchQuery = (movie, query) => {
    return movie.title.toLowerCase().includes(query.toLowerCase());
  };

  const matchesRating = (movie, rating) => {
    if (rating === "All Ratings") return true;
    if (rating === "Good") return movie.rating >= 8;
    if (rating === "Ok") return movie.rating >= 5 && movie.rating < 8;
    if (rating === "Low") return movie.rating >= 3 && movie.rating < 5;
    if (rating === "Bad") return movie.rating < 3;
    return false;
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchesSearchQuery(movie, query) &&
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating),
  );

  return (
    <>
      <input
        type="text"
        value={query}
        className="search-input"
        placeholder="Search for a movie..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label htmlFor="genre-filter">Genre:</label>
          <select
            id="genre-filter"
            className="filter-dropdown"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Horror</option>
            <option>Fantasy</option>
          </select>
        </div>
        <div className="filter-slot">
          <label htmlFor="rating-filter">Rating</label>
          <select
            id="rating-filter"
            className="filter-dropdown"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option>All Ratings</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Low</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
export default MoviesGrid;
