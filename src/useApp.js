import { useEffect, useState } from "react";

const useApp = () => {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prevWatchlist) => {
      if (prevWatchlist.includes(movieId)) {
        return prevWatchlist.filter((id) => id !== movieId);
      } else {
        return [...prevWatchlist, movieId];
      }
    });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      await fetch("movies.json")
        .then((res) => res.json())
        .then((movies) => {
          setMovies(movies);
        });
    };
    fetchMovies();
    return () => {
      setMovies([]);
    };
  }, []);

  return {
    movies,
    watchlist,
    toggleWatchlist,
    setMovies,
    setWatchlist,
  };
};
export default useApp;
