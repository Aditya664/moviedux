# Moviedux

Moviedux is a React movie discovery app for browsing a local movie catalogue,
filtering titles, and building a personal watchlist.

## Features

- Browse movies with title, genre, rating, and poster artwork.
- Search movies by title.
- Filter movies by genre and rating.
- Add or remove movies from the watchlist.
- Navigate between the home catalogue and watchlist pages.
- Display a fallback poster when an image cannot be loaded.
- Deploy as a single-page app on Netlify.

## Tech stack

- React 18
- React Router
- Create React App
- CSS
- Static movie data in `public/movies.json`

## Getting started

### Prerequisites

- Node.js 16 or later
- npm

### Installation

Clone the repository, change into the project directory, and install
dependencies:

```bash
git clone <repository-url>
cd moviedux
npm install
```

### Run locally

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the development server. |
| `npm test` | Runs the test suite in watch mode. |
| `npm run build` | Creates an optimized production build in `build/`. |

## Project structure

```text
public/
  images/       Movie poster assets
  movies.json   Movie catalogue
src/
  components/   Header, footer, movie grid, cards, and watchlist
  App.js        Application routes and layout
  useApp.js     Movie loading and watchlist state
netlify.toml    Netlify build and SPA redirect configuration
```

## Data

Movie data is loaded from `public/movies.json`. Poster images are resolved from
`public/images/` using each movie's `id`, for example
`public/images/1.jpg`. Add or update entries in `movies.json` and provide the
corresponding poster image to extend the catalogue.

The watchlist is held in application state and resets when the page is
reloaded.

## Deploy to Netlify

This repository includes `netlify.toml`, which configures Netlify to:

- Run `npm run build`
- Publish the `build` directory
- Redirect all routes to `index.html` for React Router support

To deploy, connect the repository in the Netlify dashboard. Netlify will use
the included configuration automatically.
