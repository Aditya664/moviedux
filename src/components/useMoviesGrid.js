import { useState } from "react";

const useMoviesGrid = (movies) => {
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

  return {
    query,
    setQuery,
    genre,
    setGenre,
    rating,
    setRating,
    filteredMovies,
  };
};
export default useMoviesGrid;
