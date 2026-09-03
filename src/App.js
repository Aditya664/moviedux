import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import routes from "./routes";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useApp from "./useApp";

const App = () => {
  const { movies, watchlist, toggleWatchlist } = useApp();

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {routes.map(({ path, element: Component }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <Component
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                  watchlist={watchlist}
                />
              }
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
