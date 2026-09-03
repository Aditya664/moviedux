import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";

const routes = [
  {
    path: "/",
    element: (props) => <MoviesGrid {...props} />,
  },
  {
    path: "/watchlist",
    element: (props) => <Watchlist {...props} />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
];

export default routes;
