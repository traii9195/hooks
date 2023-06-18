import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './MovieList.css';

const MovieCard = ({ movie }) => {
  return (
    //card from bootstrap 
    <div className="movie-card">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.PosterUrl} alt={movie.Title} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Rating: {movie.Rating}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href={movie.descriptionLink} target="_blank">Link to the film description</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
