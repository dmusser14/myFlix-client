import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  // setting initial value of movies to an empty list
  const [movies, setMovies] = useState([]);
  
  const [selectedMovie, setSelectedMovie] = useState(null);

  // fetching list of movies from myFlix API
  useEffect(() => {
    fetch("https://mymovies-flix-cdcc58dfba84.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.movie.map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            description: movie.description,
            image: movie.image,
            director:{
              name: movie.director.name
            },
            genre: {
              name: movie.genre.name,
            },
            rating: movie.rating
          };
        });

        setMovies(moviesFromApi);
      });
  }, []);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }
  if (movies.length === 0) {
    return <div>The List is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};