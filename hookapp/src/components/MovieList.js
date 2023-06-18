import React, { useState } from 'react';
import MovieCard from './MovieCard'; 
import apis from '../data/Apis'; 
import Header from './Headder';

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

  // Add descriptionLink to the  movie
  apis[0].descriptionLink = 'https://www.imdb.com/title/tt1477834/?ref_=nv_sr_srsg_3_tt_7_nm_1_q_aq';
  apis[1].descriptionLink = 'https://www.imdb.com/title/tt6788942/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_bad%2520gen';
  apis[2].descriptionLink = 'https://www.imdb.com/title/tt15326988/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_ghosted%2520';
  apis[3].descriptionLink = 'https://www.imdb.com/title/tt2531336/?ref_=fn_al_tt_1';
  apis[4].descriptionLink = 'https://www.imdb.com/title/tt3461252/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_the%2520blue%2520ele';
  apis[5].descriptionLink = 'https://www.imdb.com/title/tt0938283/?ref_=nv_sr_srsg_3_tt_8_nm_0_q_the%2520last%2520ai';
  apis[6].descriptionLink = 'https://www.imdb.com/title/tt0382625/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_the%2520da%2520vinci%2520';
  apis[7].descriptionLink = 'https://www.imdb.com/title/tt0944947/?ref_=nv_sr_srsg_1_tt_7_nm_0_q_game%2520of%2520';
  apis[8].descriptionLink = 'https://www.imdb.com/title/tt10366206/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_jhon%2520wick';
 
  return (
    <div>
      <Header handleFilter={handleFilter}></Header>
      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
