import React, { useState } from 'react';


const Filter = ({ handleFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter({ title, rating });
  };

  return (
//Filter the movies with title
//Filter the movies with rating 
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />

        <label htmlFor="rating">Rating:</label>
        <input type="text" id="rating" value={rating} onChange={handleRatingChange} />

        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

export default Filter;
