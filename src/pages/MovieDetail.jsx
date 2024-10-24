import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetchMovieDetails();
    fetchMovieCast();
  }, []);

  const fetchMovieDetails = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
    const data = await response.json();
    setMovie(data);
  };

  const fetchMovieCast = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`);
    const data = await response.json();
    setCast(data.cast);
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <Container className='mt-5 pt-5'>
      <Row>
        <Col md={6}>
          <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} fluid />
        </Col>
        <Col md={6}>
          <h2 className='text-success '>{movie.title}</h2>
          <p>
            <strong></strong>
            {/* Map through genres and display them as badges */}
            {movie.genres.map(genre => (
              <Badge key={genre.id}  bg="success" className="me-2 ">
                {genre.name}
              </Badge>
            ))}
          </p>
          <p className="lead">
            <strong>Description:</strong> {movie.overview}
          </p>
          <h4 className='text-success'>Cast:</h4>
          <Row>
            {cast.slice(0, 6).map(actor => (
              <Col key={actor.cast_id} xs={4}>
                <Image src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} fluid rounded />
                <p className='lead '>{actor.name}</p>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
