import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  // setting initial value of movies to an empty list
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // fetching list of movies from myFlix API
  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://mymovies-flix-cdcc58dfba84.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const moviesFromApi = data.map((movie) => {
          return {
            _id: movie._id,
            title: movie.Title,
            description: movie.Description,
            image: movie.ImagePath,
            director:{
              name: movie.Director.Name
            },
            genre: {
              name: movie.Genre.Name,
            },
            rating: movie.Rating
          };
        });

        setMovies(moviesFromApi);
      });
  }, [token]);

  // If no user is logged in display LoginView. If successful LoginView notify MainView that login was successful.
  if (!user) {
    return (
      <>
        <LoginView 
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }} 
        />
        or
        <SignupView />
      </>
    );
  }

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
          key={movie._id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
      <button 
        onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      >
        Logout
      </button>
    </div>
  );
};