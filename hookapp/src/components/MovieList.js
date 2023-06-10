import React, { useState } from 'react';
// import the  components we use 
import MovieCard from './MovieCard'; 
import apis from '../data/Apis'; 
import Filter from './Filter';  

// les condition en utilise 
const MovieList = () => {
  const [filteredMovies, setFilteredMovies] = useState(apis);

  const handleFilter = ({ title, rating }) => {
    const filtered = apis.filter((movie) => {
      if (title && rating) {
        return (
          movie.Title.toLowerCase().includes(title.toLowerCase()) &&
          movie.Rating === rating
        );
      } else if (title) {
        return movie.Title.toLowerCase().includes(title.toLowerCase());
      } else if (rating) {
        return movie.Rating === rating;
      }
      return true;
    });

    setFilteredMovies(filtered);
  };

  return (
    <div>
      <Filter handleFilter={handleFilter} />

      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
