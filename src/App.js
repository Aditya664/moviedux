import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import routes from "./routes";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
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
    return () => {
      setMovies([]);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {routes.map(({ path, element: Component }, index) => (
            <Route
              key={index}
              path={path}
              element={<Component movies={movies} />}
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
