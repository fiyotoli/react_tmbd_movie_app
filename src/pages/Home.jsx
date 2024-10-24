import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import GenreFilter from '../components/GenreFilter';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetchMovies();
  }, [selectedGenre]);

  const fetchMovies = async () => {
    const url = selectedGenre === 'all'
      ? `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre}`;

    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <Container className='pt-5 mt-5'>
      
      <GenreFilter setSelectedGenre={setSelectedGenre} />
      <Row>
        {movies.map(movie => (
          <Col key={movie.id} md={4}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
