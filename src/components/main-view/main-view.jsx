import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      image: "https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392/?ref_=tt_ov_i",
      genre: {
        name: "Action",
        description: "Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats."
      },
      director: {
        name: "Christopher Nolan",
        bio: "Christopher Edward Nolan CBE (born 30 July 1970) is a British and American filmmaker. Known for his Hollywood blockbusters with complex storytelling, Nolan is considered a leading filmmaker of the 21st century. He is most known for his films Inception and The Dark Knight.",
        birth: "1970",      
      },
      rating: "87"   
    },
    {
      id: 2,
      title: "Toy Story",
      description: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
      image: "https://www.imdb.com/title/tt0114709/mediaviewer/rm3813007616/?ref_=tt_ov_i",
      genre: {
        name: "Animated",
        description: "Animation is a method in which pictures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film."
      },
      director: {
        name: "John Lasseter",
        bio: "John Alan Lasseter (born January 12, 1957)[5] is an American filmmaker, animator, and voice actor. He is the head of animation at Skydance Animation.",
        birth: "1957"
      },
      rating: "100"
    },
    {
      id: 3,
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      image: "https://www.imdb.com/title/tt0468569/mediaviewer/rm4023877632/?ref_=tt_ov_i",
      genre: {
        name: "Action",
        description: "Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.",      
      },
      director: {
        name: "Christopher Nolan",
        bio: "Christopher Edward Nolan CBE (born 30 July 1970) is a British and American filmmaker. Known for his Hollywood blockbusters with complex storytelling, Nolan is considered a leading filmmaker of the 21st century. He is most known for his films Inception and The Dark Knight.",
        birth: "1970",
      },
      rating: "94"
    }
  ]);
  
  const [selectedMovie, setSelectedMovie] = useState(null);

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