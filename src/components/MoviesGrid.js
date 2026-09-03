import "../styles.css";
import MovieCard from "./MovieCard";
import useMoviesGrid from "./useMoviesGrid";

const MoviesGrid = (props) => {
  const { movies, watchlist, toggleWatchlist } = props;
  const {
    query,
    setQuery,
    genre,
    setGenre,
    rating,
    setRating,
    filteredMovies,
  } = useMoviesGrid(movies);

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
          <MovieCard
            key={movie.id}
            movie={movie}
            isWatchlisted={watchlist.includes(movie.id)}
            toggleWatchlist={toggleWatchlist}
          />
        ))}
      </div>
    </>
  );
};
export default MoviesGrid;
