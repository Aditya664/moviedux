import MovieCard from "./MovieCard";

const Watchlist = (props) => {
  const { movies, watchlist, toggleWatchlist } = props;

  return (
    <div className="watchlist">
      {watchlist.map((movieId) => {
        const movie = movies.find((m) => m.id === movieId);
        return movie ? (
          <MovieCard
            key={movie.id}
            movie={movie}
            isWatchlisted={true}
            toggleWatchlist={toggleWatchlist}
          />
        ) : null;
      })}
    </div>
  );
};
export default Watchlist;
