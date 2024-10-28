import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const GenreFilter = ({ setSelectedGenre }) => {
  const [genres, setGenres] = useState([]);
  const [activeGenre, setActiveGenre] = useState('all'); // State to track the active genre
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
    const data = await response.json();
    setGenres(data.genres);
  };

  const buttonStyle = {
    border: 'none', // Remove border
    marginRight: '0.5rem', // Spacing between buttons
    marginBottom: '0.5rem', // Spacing below buttons
    backgroundColor: '#343a40', // Default background color (dark)
    color: 'white', // Text color
    transition: 'background-color 0.3s ease', // Smooth transition for hover effect
  };

  const activeButtonStyle = {
    backgroundColor: '#28a745', // Success color for active buttons
    color: 'white', // Keep text color white on active
  };

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
    setActiveGenre(genreId); // Set the clicked genre as active
  };

  return (
    <div className="mb-3 container">
      <Button
        style={{ ...buttonStyle, ...(activeGenre === 'all' ? activeButtonStyle : {}) }} // Apply active style if "All" is selected
        onClick={() => handleGenreClick('all')}
      >
        All
      </Button>
      {genres.map(genre => (
        <Button
          key={genre.id}
          onClick={() => handleGenreClick(genre.id)}
          style={{ ...buttonStyle, ...(activeGenre === genre.id ? activeButtonStyle : {}) }} // Apply active style if this genre is selected
        >
          {genre.name}
        </Button>
      ))}
    </div>
  );
};

export default GenreFilter;
