import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieCard = ({ movie }) => {
  const totalStars = 5; // Total number of stars
  const filledStars = Math.floor(movie.vote_average / 2); // Calculate the number of filled stars
  const hasHalfStar = movie.vote_average % 2 !== 0; // Check if there's a half star

  // Inline styles for the card
  const cardStyle = {
    height: '400px', // Fixed height for the card
    backgroundColor: 'rgb(10, 8, 31)',
    color: 'white',
  };

  const imgStyle = {
    height: '200px', // Specific height for the image
    objectFit: 'cover', // Ensure the image covers the area
  };

  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%', // Allow the card body to fill the height
  };

  return (
    <Card className="mb-4 shadow" style={cardStyle}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={imgStyle} />
      <Card.Body style={bodyStyle}>
        <div className="d-flex justify-content-between align-items-center flex-grow-1">
          <Card.Title className="text-white">{movie.title}</Card.Title>
          <span className="bg-success text-white rounded px-2 ms-2">{new Date(movie.release_date).getFullYear()}</span>
        </div>
        <div className="d-flex align-items-center my-2">
          {/* Render filled stars */}
          {[...Array(filledStars)].map((_, index) => (
            <i key={index} className="bi bi-star-fill  text-success" />
          ))}
         
          {[...Array(totalStars - filledStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
            <i key={index + filledStars} className="bi bi-star-fill text-success" />
          ))}
           {/* Render half star if applicable */}
           {hasHalfStar && <i className="bi bi-star-half text-success mx-1" />}
          {/* Render dull stars */}
          <span className="text-white ms-2">{movie.vote_average}</span>
        </div>
        <Link to={`/movie/${movie.id}`}>
          <Button variant="success" className="mt-auto">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
